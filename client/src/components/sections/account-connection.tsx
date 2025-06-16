import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Plus } from "lucide-react";

export default function AccountConnection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Connect and manage all your Instagram accounts in one place
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Simply connect one or many Instagram Accounts for your Outreach.
            </p>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Add more Accounts with one click</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Highest Quality Mobile Proxy included with every account</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>Connect multiple Accounts to the same campaign for instant scaling</span>
              </div>
            </div>
          </div>

          {/* Right Content - Account Connection Interface */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center mb-4">
                <Instagram className="h-12 w-12 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Connect your Instagram account</h3>
              <p className="text-gray-600 text-center text-sm mb-6">
                Allow AutoIGDM to access your Instagram account
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Instagram Username</label>
                  <Input placeholder="Enter username..." className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <Input type="password" placeholder="Enter password..." className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Secret Key</label>
                  <Input placeholder="Get SMS app if you don't have TOTP" className="w-full text-xs" />
                </div>
                
                <div className="bg-gray-800 text-white p-3 rounded text-xs">
                  MONTHLY INSTAGRAM BUSINESS ACCOUNT ACCESS
                </div>
                
                <Button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90">
                  Add Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}