import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Play } from "lucide-react";

export default function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Black Friday Banner */}
        <div className="bg-black text-white py-3 px-6 rounded-lg mb-12 inline-block">
          <span className="text-orange-400">🎁</span> Unlock <span className="font-bold">50% OFF</span> your first month of <span className="font-bold">AutoIGDM PRO</span> this Black Week! Use Coupon "<span className="font-bold">BFCM50</span>" during Checkout <span className="text-orange-400">🎁</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Unlock <span className="text-primary">Endless Leads</span> with <span className="text-primary">Automated Cold DMs</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
          Effortlessly grow your business with fully automated Instagram cold outreach, cloud-based execution, and built-in lead generation
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={scrollToPricing}
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            Start Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            className="border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors"
            onClick={() => {
              const element = document.getElementById("demo");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="font-medium">Proxy Included</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="font-medium">No computer or extension needed</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="font-medium">Leads Included</span>
          </div>
        </div>
      </div>
    </section>
  );
}