import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

export default function PricingSignup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { fullName, email });
  };

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pricing Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Only $149/m -<br>
              1 Seat included<br>
              Only $149/m<br>
              1 Seat included
            </h2>

            <ul className="space-y-3 text-gray-700">
              {[
                "Automated Lead Generation",
                "DMs on autopilot, every day",
                "100% Cloud-based",
                "Fully Automated outreach",
                "Mobile Proxy included",
                "Advanced Lead Targeting",
                "Smart AI Lead Filtering",
                "Keyword Filter for Name & Bio",
                "Add Accounts freely (charged per seat)",
                "and more!"
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Signup Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <span className="text-primary font-semibold">Step 1</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <span className="text-gray-600">Step 2</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-1/2"></div>
              </div>
              <div className="grid grid-cols-2 mt-2 text-sm">
                <span className="text-primary font-medium">Enter your details</span>
                <span className="text-gray-500 text-right">Complete your sign up</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Full Name..."
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                CREATE MY ACCOUNT
              </Button>
              <p className="text-center text-sm text-gray-500 mt-4">
                We Respect Your Privacy & Information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
