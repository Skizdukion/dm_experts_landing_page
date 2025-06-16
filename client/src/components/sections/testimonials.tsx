import { Star } from "lucide-react";
import { SiYoutube } from "react-icons/si";

export default function Testimonials() {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      badge: "10K\nDMS",
      quote: "The only solution I've found that really works",
      description: "No stress, no chaos, just a consistent flow of leads and conversations. If you value your sanity and want results without the typical Instagram headaches, you're going to be thankful you made this move.",
      author: "Jay Feldman",
      channel: "LeadGenJay (56.7k subscribers)"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      badge: "100% AUTOMATED",
      quote: "It does a lot of heavy lifting for you in the backend.",
      description: "The time and mental energy I've saved with this system is unreal. Setting it up once and watching real conversations and real opportunities roll in...",
      author: "Nick Saraev",
      channel: "Maker School (85.1k subscribers)"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      badge: "1999",
      quote: "AutoIGDM will turn your Instagram into a consistent stream of new leads",
      description: "If you're building something and you need momentum, this is honestly the best-kept secret I can recommend.",
      author: "Liam Ottley",
      channel: "MorningSide AI (512k subscribers)"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">TESTIMONIALS</h2>
          <h3 className="text-3xl font-bold text-gray-900">What creators are saying</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                {/* Video thumbnail */}
                <div className="w-full h-48 bg-gray-900 rounded-xl relative overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt="Testimonial video thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded text-sm font-bold whitespace-pre-line">
                    {testimonial.badge}
                  </div>
                  <div className="absolute top-4 right-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-4 font-medium">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-sm text-gray-600 mb-4">
                "{testimonial.description}"
              </p>
              <div className="flex items-center justify-center space-x-2">
                <SiYoutube className="text-red-500 h-4 w-4" />
                <div className="text-sm">
                  <div className="font-semibold">- {testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.channel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Real Users. Real Wins. Real Momentum. 🚀
          </h3>
          <p className="text-xl text-gray-600">
            Discover why creators, founders, and marketers are raving about AutoIGDM.
          </p>
        </div>
      </div>
    </section>
  );
}
