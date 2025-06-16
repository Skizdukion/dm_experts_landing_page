import { Play } from "lucide-react";

export default function VideoDemo() {
  return (
    <section id="demo" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Watch the Demo below to see what PRO can do for you!
        </h2>

        <div className="relative bg-gradient-to-br from-[hsl(207,100%,95%)] to-[hsl(207,93%,92%)] rounded-2xl p-8 md:p-16">
          <div className="relative">
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">THIS IS</h3>
            <div className="flex items-center justify-center mb-8">
              <div className="mr-4">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 15L35 25L35 35L20 45V15Z" fill="#1F2937" stroke="#1F2937" strokeWidth="2"/>
                  <path d="M15 25L25 20V40L15 35" fill="none" stroke="#1F2937" strokeWidth="2" strokeDasharray="3 3"/>
                </svg>
              </div>
            </div>
            
            {/* Video placeholder */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4">
                <Play className="h-8 w-8 text-gray-600" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">
                  <span className="text-pink-500">auto</span><span className="text-blue-500">IGDM</span>
                </div>
                <div className="text-4xl font-bold text-primary">PRO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
