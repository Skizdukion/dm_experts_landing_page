import { Bot, Zap, UserPlus, Lock, BarChart3, Moon } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Bot,
      title: "Automate Your Outreach",
      subtitle: "Send Cold DMs Daily",
      description: "Eliminate the manual work and automate your Instagram DMs to reach more potential clients consistently"
    },
    {
      icon: Zap,
      title: "Boost Your Conversions",
      subtitle: "Increase Sales by 4x",
      description: "See a significant increase in your sales and higher conversions rates with our AI-powered messaging system"
    },
    {
      icon: UserPlus,
      title: "Grow Your Client List",
      subtitle: "Expand Your Reach by 10x",
      description: "Grow your client list faster than ever before with targeted and automated outreach"
    },
    {
      icon: Lock,
      title: "Advanced Targeting & Filtering",
      subtitle: "Find High-Quality Leads",
      description: "Use advanced targeting and AI filtering to engage with high-quality leads that convert"
    },
    {
      icon: BarChart3,
      title: "Maximize your ROI",
      subtitle: "Worth Every Penny",
      description: "AutoIGDM Pro pays for itself by boosting your engagement and conversions, ensuring a high return on investment"
    },
    {
      icon: Moon,
      title: "Scalable Solution",
      subtitle: "Manage Unlimited Accounts",
      description: "Scale your outreach effortlessly with the ability to manage multiple Instagram accounts from a single dashboard"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4 font-semibold">{feature.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
