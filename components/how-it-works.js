import { MousePointer2, ReceiptText, Send } from "lucide-react";
import Container from "@/components/container";

const steps = [
  {
    number: "1",
    title: "Choose Service",
    description: "Select from Food, Groceries, or Parcels on the Kashio app.",
    icon: MousePointer2,
  },
  {
    number: "2",
    title: "Place Order",
    description: "Confirm your details and choose a convenient payment method.",
    icon: ReceiptText,
  },
  {
    number: "3",
    title: "Track & Relax",
    description: "Watch your delivery arrive in real-time on our live map.",
    icon: Send,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <Container>
        <div className="mb-20 text-center">
          <h2 className="lg:text-4xl text-2xl font-extrabold lg:leading-16 tracking-[-0.01em] text-[#141e18]">
            How Kashio Works
          </h2>
          <p className="text-base leading-7 text-[#3d4a3c]">
            Simple, fast, and transparent. Three steps to convenience.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="absolute left-[15%] right-[15%] top-1/3 hidden h-px bg-[#bccbb8]/40 md:block" />

          {steps.map(({ number, title, description, icon: Icon }) => (
            <article
              key={number}
              className="group relative z-10 flex flex-col items-center text-center"
            >
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-white bg-[#006e2b] text-[30px] font-normal text-white shadow-[0_8px_18px_rgba(23,33,27,0.12)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                {number}
              </div>
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-[20px] bg-[#f1fcf2] text-[#006e2b] transition-transform duration-300 group-hover:scale-105">
                <Icon size={39} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-base lg:text-lg font-medium text-[#141e18]">
                {title}
              </h3>
              <p className="max-w-[340px] text-base leading-6 text-[#3d4a3c]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
