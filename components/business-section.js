import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";

const merchantBenefits = [
  "30% increase in average orders",
  "Seamless order management system",
  "Dedicated merchant support team",
];

const riderBenefits = [
  "Weekly payouts directly to your account",
  "Flexible working hours—you choose",
  "Comprehensive rider safety insurance",
];

function BenefitList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 text-base leading-6 text-[#141e18]"
        >
          <CheckCircle2
            size={20}
            strokeWidth={1.8}
            className="shrink-0 text-[#006e2b]"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function BusinessSection() {
  return (
    <div id="partners">
      <section className="overflow-hidden bg-[#ebf7ed] py-24">
        <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <Image
              src="/images/merchant.webp"
              alt="Kotli merchant using the Kashio merchant platform"
              width={1077}
              height={942}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="image-lift h-[390px] w-full rounded-[20px] object-cover shadow-[0_8px_20px_rgba(23,33,27,0.08)] sm:h-[460px] md:h-[500px]"
            />
          </div>

          <div className="order-1 space-y-8 md:order-2">
            <h2 className="text-base lg:text-4xl font-semibold text-[#141e18]">
              Grow your business with Kashio
            </h2>
            <p className="max-w-[560px] text-base leading-7 text-[#3d4a3c]">
              Join hundreds of Kotli merchants reaching more customers through
              our platform. We provide the tools, the tech, and the riders—you
              focus on your products.
            </p>
            <BenefitList items={merchantBenefits} />
            <Button asChild size="lg" className="!text-white">
              <a href="#early-access">Become a Partner</a>
            </Button>
          </div>
        </Container>
      </section>

      <section id="about" className="overflow-hidden bg-white py-24">
        <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            <h2 className="text-base lg:text-4xl font-semibold text-[#141e18]">
              Earn by delivering
            </h2>
            <p className="max-w-[560px] text-base leading-7 text-[#3d4a3c]">
              Be your own boss. Enjoy the freedom to work when you want and
              where you want. Kashio offers competitive earnings and a
              supportive local community.
            </p>
            <BenefitList items={riderBenefits} />
            <Button asChild size="lg" className="text-white!">
              <a href="#early-access">Join as a Rider</a>
            </Button>
          </div>

          <div>
            <Image
              src="/images/rider.webp"
              alt="Kashio rider delivering through Kotli"
              width={1074}
              height={948}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="image-lift h-[390px] w-full rounded-[20px] object-cover shadow-[0_8px_20px_rgba(23,33,27,0.08)] sm:h-[460px] md:h-[500px]"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
