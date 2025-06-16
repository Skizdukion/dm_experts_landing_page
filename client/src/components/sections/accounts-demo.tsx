import { Button } from "@/components/ui/button";
import { MoreVertical, Plus } from "lucide-react";

export default function AccountsDemo() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Accounts</h2>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-primary text-sm hover:underline">Need more seats?</a>
                <span className="text-gray-600 font-medium">3/3 Seats Used</span>
                <Button variant="outline" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New
                </Button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="grid grid-cols-12 gap-4 py-3 text-sm font-medium text-gray-500 border-b">
                <div className="col-span-6">Name</div>
                <div className="col-span-6 text-right">Status</div>
              </div>

              {/* Account Row 1 */}
              <div className="grid grid-cols-12 gap-4 py-4 items-center hover:bg-gray-50 rounded-lg transition-colors">
                <div className="col-span-6 flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-900">@zuck</span>
                </div>
                <div className="col-span-6 flex items-center justify-end space-x-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Active</span>
                  <span className="bg-gray-800 text-white px-3 py-1 rounded text-xs">Your account is sending DMs.</span>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Account Row 2 */}
              <div className="grid grid-cols-12 gap-4 py-4 items-center hover:bg-gray-50 rounded-lg transition-colors">
                <div className="col-span-6 flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-900">@willsmith</span>
                </div>
                <div className="col-span-6 flex items-center justify-end space-x-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Active</span>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Account Row 3 */}
              <div className="grid grid-cols-12 gap-4 py-4 items-center hover:bg-gray-50 rounded-lg transition-colors">
                <div className="col-span-6 flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-900">@mariansuflarsky</span>
                </div>
                <div className="col-span-6 flex items-center justify-end space-x-3">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">In progress...</span>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Mobile Header */}
              <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b">
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
                <span className="font-medium text-gray-900">Serdar</span>
                <div className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                  $
                </div>
              </div>

              {/* Mobile Accounts Section */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Need more seats?</span>
                  <span className="text-sm font-medium">3/6 Seats Used</span>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Accounts</h2>
                  <Button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
                    <Plus className="h-4 w-4 mr-1" />
                    Add New
                  </Button>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm font-medium text-gray-500 pb-2 border-b">
                    <span>Name</span>
                    <span>Status</span>
                  </div>

                  {/* Mobile Account Rows */}
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="font-medium text-sm">@zuck</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="font-medium text-sm">@willsmith</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="font-medium text-sm">@marian...</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">In progress...</span>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 text-center text-gray-600 py-3 border-t">
                  + Add new
                </button>
              </div>

              {/* Mobile Bottom Search */}
              <div className="bg-yellow-400 p-3 flex justify-center">
                <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
