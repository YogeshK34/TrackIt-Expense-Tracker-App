import { UniqueHero } from "@/components/HeroComponent";
import Features from "@/components/features/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { AnimatedTestimonialsDemo } from "@/components/testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/sections/FloatingCTA";

export default function App() {
  return (
    <div className="bg-background">
      <UniqueHero />
      <TrustIndicators />
      <div className="border-t">
        <HowItWorks />
      </div>
      <div className="border-t">
        <Features />
      </div>
      <div className="border-t">
        <Pricing />
      </div>
      <div className="border-t bg-muted">
        <AnimatedTestimonialsDemo />
      </div>
      <div className="border-t">
        <FAQ />
      </div>
      <div className="border-t">
        <Newsletter />
      </div>
      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-lg">
        <Footer />
      </footer>
      <FloatingCTA />
    </div>
  );
}
