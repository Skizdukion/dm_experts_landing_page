import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-primary">AutoIGDM</span> Pro
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("features")} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("pricing")} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("demo")} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Demo
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection("pricing")}
              className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <button className="md:hidden text-gray-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
