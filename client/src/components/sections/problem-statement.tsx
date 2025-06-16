import { Button } from "@/components/ui/button";
import { Mail, Clock, AlertTriangle, ArrowRight } from "lucide-react";

export default function ProblemStatement() {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cold outreach <span className="text-red-500">won't help you</span> get quality leads quickly if you...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Problem 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-red-500" />
              <AlertTriangle className="h-4 w-4 text-red-500 absolute ml-6 -mt-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Spend hours daily doing manual cold outreach on Instagram
            </h3>
          </div>

          {/* Problem 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-red-500" />
              <AlertTriangle className="h-4 w-4 text-red-500 absolute ml-6 -mt-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Are not <span className="font-bold">consistently</span> sending outreach DMs every single day<br />
              Are not <span className="font-bold">consistently</span> sending outreach DMs every single day
            </h3>
          </div>

          {/* Problem 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Send messages to wrong & unqualified leads<br />
              Send messages to wrong & unqualified Leads
            </h3>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover <span className="text-primary">AutoIGDM PRO</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            The only cold outreach tool that fully automates Instagram DMs and gets you replies
          </p>
          <Button 
            onClick={scrollToPricing}
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            START NOW <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}