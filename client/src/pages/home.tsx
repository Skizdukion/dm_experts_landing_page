import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import ProblemStatement from "@/components/sections/problem-statement";
import AccountConnection from "@/components/sections/account-connection";
import TargetAudience from "@/components/sections/target-audience";
import MultiAccountCallout from "@/components/sections/multi-account-callout";
import AccountsDemo from "@/components/sections/accounts-demo";
import PricingSignup from "@/components/sections/pricing-signup";
import FeaturesGrid from "@/components/sections/features-grid";
import MobileShowcase from "@/components/sections/mobile-showcase";
import VideoDemo from "@/components/sections/video-demo";
import Testimonials from "@/components/sections/testimonials";
import FinalCTA from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(207,100%,95%)] to-[hsl(207,93%,92%)]">
      <Header />
      <Hero />
      <ProblemStatement />
      <AccountConnection />
      <TargetAudience />
      <MultiAccountCallout />
      <AccountsDemo />
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Sign up now and start your automated outreach today!
        </h2>
      </div>
      <PricingSignup />
      <div className="py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">It's a no-brainer</h2>
        <p className="text-xl text-gray-700">
          Hundreds of businesses have boosted their outreach with AutoIGDM Pro, and who says no to more clients?
        </p>
      </div>
      <FeaturesGrid />
      <MobileShowcase />
      <VideoDemo />
      <FinalCTA />
      <Testimonials />
    </div>
  );
}
