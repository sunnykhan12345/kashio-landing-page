import Image from "next/image";
import { MapPin } from "lucide-react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-[#f1fcf2]">
      <Container className="grid grid-cols-1 items-center gap-10 pb-20 pt-14 md:grid-cols-2 md:gap-16 md:pb-24 md:pt-16">
        <div className="relative z-10 max-w-[560px] space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#93F5A4] px-4 py-2 text-base font-medium text-[#007232]">
            <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
            Your city. Delivered.
          </div>

          <h1 className="lg:text-5xl text-4xl font-extrabold lg:leading-16 tracking-[-0.01em] text-[#141e18]">
            Everything you need,
            <br />
            <span className="text-[#12b94f]">delivered</span> across Kotli
          </h1>

          <p className="max-w-[560px] text-base leading-7 text-[#3d4a3c]">
            From Kotli&apos;s finest restaurants to your essential medicines and
            daily groceries. Fast, reliable, and friendly delivery at your
            doorstep.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="!text-white">
              <a href="#early-access">Get Early Access</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>

        <div className="relative flex h-[440px] items-center justify-center md:h-[600px]">
          <Image
            src="/images/hero-phone.png"
            alt="Kashio mobile app shown on three premium phone mockups"
            width={1335}
            height={1437}
            priority
            sizes="(max-width: 767px) 94vw, 48vw"
            className="hero-float h-auto w-full max-w-[560px] select-none object-contain drop-shadow-[0_22px_32px_rgba(0,110,43,0.08)]"
          />
        </div>
      </Container>
    </section>
  );
}
