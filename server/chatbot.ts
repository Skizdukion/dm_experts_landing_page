import { Router } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const router = Router();

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Contact information - replace with your real contact details
const CONTACT_INFO = {
  whatsapp: "+1-555-123-4567", // Replace with your real WhatsApp number
  telegram: "@dmexperts_support", // Replace with your real Telegram handle
  email: "support@dmexperts.com" // Replace with your real email
};

// Project information for context
const PROJECT_CONTEXT = `
You are a helpful assistant for DM Experts, a digital marketing and business consulting company. 
Our services include:
- Digital Marketing Strategy
- Social Media Management
- SEO & Content Marketing
- Business Development
- Lead Generation
- Brand Development

When users ask about contact information, provide these details:
- WhatsApp: ${CONTACT_INFO.whatsapp}
- Telegram: ${CONTACT_INFO.telegram}
- Email: ${CONTACT_INFO.email}

Be friendly, professional, and helpful. If you don't know something specific about our services, 
suggest they contact us directly for more detailed information.
`;

// Chat endpoint
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Check if user is asking for contact information
    const contactKeywords = ["contact", "phone", "whatsapp", "telegram", "email", "reach", "get in touch"];
    const isContactRequest = contactKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );

    if (isContactRequest) {
      const contactResponse = `
You can reach us through any of these channels:

📱 **WhatsApp**: ${CONTACT_INFO.whatsapp}
📨 **Telegram**: ${CONTACT_INFO.telegram}
✉️ **Email**: ${CONTACT_INFO.email}

We're here to help with your digital marketing and business needs! Feel free to reach out anytime.
      `;
      return res.json({ response: contactResponse.trim() });
    }

    // Use Gemini AI for other questions
    const prompt = `${PROJECT_CONTEXT}\n\nUser question: ${message}`;
    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    res.json({ response });
  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({ 
      error: "Sorry, I'm having trouble processing your request. Please try again or contact us directly." 
    });
  }
});

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({ status: "Chatbot is running", timestamp: new Date().toISOString() });
});

export { router as chatbotRoutes };
