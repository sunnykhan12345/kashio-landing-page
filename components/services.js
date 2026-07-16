import {
  ArrowRight,
  BriefcaseMedical,
  Package,
  ShoppingBasket,
  Utensils,
} from "lucide-react";
import Container from "@/components/container";

const services = [
  {
    title: "Food",
    description: "Hot meals from Kotli's best restaurants delivered to you.",
    icon: Utensils,
  },
  {
    title: "Grocery",
    description: "Fresh produce and daily essentials from local markets.",
    icon: ShoppingBasket,
  },
  {
    title: "Medicines",
    description: "Quick and safe delivery of healthcare needs at your door.",
    icon: BriefcaseMedical,
  },
  {
    title: "Parcel",
    description:
      "Send items across the city with our reliable courier service.",
    icon: Package,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f1fcf2] py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 lg:text-4xl text-2xl font-extrabold lg:leading-16 tracking-[-0.01em] text-[#141e18]">
            One app for everyday deliveries
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-[#3d4a3c]">
            Explore our range of specialized services designed to make your life
            in Kotli easier and more convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="card-lift group rounded-[20px] border border-[#bccbb8]/30 bg-[#e5f1e7] p-8 hover:bg-[#e0ebe1]"
            >
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#006e2b] shadow-[0_2px_8px_rgba(23,33,27,0.04)] transition-transform duration-300 group-hover:scale-105">
                <Icon size={31} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mb-2 text-base font-normal text-[#141e18]">
                {title}
              </h3>
              <p className="mb-6 min-h-[96px] text-base leading-6 text-[#3d4a3c]">
                {description}
              </p>
              <a
                href="#early-access"
                className="inline-flex items-center gap-2 text-base font-bold text-[#006e2b] transition-[gap,opacity] duration-200 hover:gap-3 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006e2b]"
              >
                Learn More
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
