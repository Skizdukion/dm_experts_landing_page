export default function MobileShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          ...and <span className="text-primary">YES</span>, it works on<br>
          mobile too!
        </h2>

        <div className="flex justify-center items-center space-x-8 mt-12">
          {/* Mobile mockup images showing the app interface */}
          <div className="relative">
            {/* Left phone mockup */}
            <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2 transform -rotate-6">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                {/* Instagram connect screen mockup */}
                <div className="p-6 text-center">
                  <div className="mt-8">
                    <svg className="w-16 h-16 text-pink-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <h3 className="font-bold text-lg mb-2">Connect your Instagram account</h3>
                    <p className="text-gray-600 text-sm mb-6">Allow AutoIGDM to access your Instagram account</p>
                    <div className="text-xs text-gray-500 mb-8">Step 1: Provide your Instagram</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center phone mockup */}
          <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
              {/* Accounts list mockup */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Accounts</h3>
                  <span className="text-sm text-gray-600">3/6 Seats Used</span>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded text-sm mb-4">+ Add New</button>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <span className="text-sm">@zuck</span>
                    </div>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Warming up</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <span className="text-sm">@willsmith</span>
                    </div>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right phone mockup */}
          <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2 transform rotate-6">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
              {/* Settings/filtering screen mockup */}
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-primary text-white px-2 py-1 rounded text-xs">Details</span>
                  <span className="text-gray-600 text-xs">Sequences</span>
                  <span className="text-gray-600 text-xs">Schedule</span>
                </div>
                
                <div className="mb-4">
                  <label className="flex items-center justify-between">
                    <span className="text-sm">Active</span>
                    <div className="w-10 h-6 bg-primary rounded-full"></div>
                  </label>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Filtering</h4>
                  <h5 className="text-sm font-medium text-gray-900 mb-2">Keyword Filtering</h5>
                  <span className="text-xs text-green-600">Recommended</span>
                  
                  <div className="mt-3">
                    <label className="text-xs text-gray-600">Negative Keywords</label>
                    <div className="text-xs text-gray-500 mb-2">How does this work?</div>
                    
                    <label className="text-xs text-gray-600">Positive Keywords</label>
                    <div className="text-xs text-gray-500">How does this work?</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
