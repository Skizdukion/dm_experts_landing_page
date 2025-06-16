import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Users, ArrowRight } from "lucide-react";

export default function TargetAudience() {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sales/Marketer */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales/Marketer</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Boost your engagement and conversion rates effortlessly with automated, personalized messaging that reaches the right audience at the right time
            </p>
          </div>

          {/* Entrepreneur */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrepreneur</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Streamline your Instagram outreach and focus on strategic growth while our AI handles the repetitive
            </p>
          </div>

          {/* Agency */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Agency</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Scale your client outreach operations efficiently and manage multiple accounts with ease, freeing up your team to focus on creative strategies
            </p>
            <Button 
              onClick={scrollToPricing}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
