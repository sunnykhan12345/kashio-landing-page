import BusinessSection from "@/components/business-section";
import HowItWorks from "@/components/how-it-works";
import Hero from "@/components/hero";
import LaunchCta from "@/components/launch-cta";
import LocalPartners from "@/components/local-partners";
import Services from "@/components/services";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import ValueBar from "@/components/value-bar";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <Hero />
        <ValueBar />
        <Services />
        <HowItWorks />
        <LocalPartners />
        <BusinessSection />
        <LaunchCta />
      </main>
      <SiteFooter />
    </>
  );
}
