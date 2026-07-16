import Image from "next/image";
import { Bike, ChevronRight, Clock3, Star } from "lucide-react";
import Container from "@/components/container";

const partners = [
  {
    name: "The Grill Castle",
    category: "Pakistani • BBQ • Fast Food",
    rating: "4.8",
    time: "20–30 min",
    delivery: "Free",
    image: "/images/partner-restaurant.webp",
    imageWidth: 948,
    imageHeight: 484,
    badge: "Top Rated",
  },
  {
    name: "Green Mart",
    category: "Groceries • Daily Needs",
    rating: "4.6",
    time: "15–25 min",
    delivery: "PKR 50",
    image: "/images/partner-grocery.webp",
    imageWidth: 952,
    imageHeight: 484,
  },
  {
    name: "HealthLine Plus",
    category: "Pharmacy • Healthcare",
    rating: "4.9",
    time: "10–20 min",
    delivery: "PKR 30",
    image: "/images/partner-pharmacy.webp",
    imageWidth: 952,
    imageHeight: 484,
  },
];

export default function LocalPartners() {
  return (
    <section className="bg-[#f1fcf2] py-24">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 text-2xl font-extrabold lg:leading-16 tracking-[-0.01em] text-[#141e18]">
              Best of Kotli
            </h2>
            <p className="text-base leading-7 text-[#3d4a3c]">
              Top-rated local favorites, delivered fast.
            </p>
          </div>

          <a
            href="#partners"
            className="inline-flex items-center gap-2 text-base font-bold text-[#006e2b] transition-[gap,opacity] duration-200 hover:gap-3 hover:opacity-80"
          >
            View All Partners
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="card-lift overflow-hidden rounded-[20px] border border-[#bccbb8]/30 bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={partner.image}
                  alt={`${partner.name} in Kotli`}
                  width={partner.imageWidth}
                  height={partner.imageHeight}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
                {partner.badge ? (
                  <span className="absolute right-4 top-4 rounded-full bg-[#ffdf95] px-3 py-1 text-base font-medium text-[#594400]">
                    {partner.badge}
                  </span>
                ) : null}
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="text-base font-normal text-[#141e18]">
                    {partner.name}
                  </h3>
                  <div className="flex shrink-0 items-center gap-1 text-[#c79a00]">
                    <Star size={17} fill="currentColor" aria-hidden="true" />
                    <span className="text-base font-bold">
                      {partner.rating}
                    </span>
                  </div>
                </div>

                <p className="mb-4 text-base leading-6 text-[#3d4a3c]">
                  {partner.category}
                </p>

                <div className="flex items-center gap-4 border-t border-[#bccbb8]/20 py-3 text-base text-[#3d4a3c]">
                  <span className="flex items-center gap-1">
                    <Clock3 size={16} aria-hidden="true" />
                    {partner.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bike size={16} aria-hidden="true" />
                    {partner.delivery}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
