import { Bike, RefreshCw, Store, Users } from "lucide-react";
import Container from "@/components/container";

const values = [
  { label: "Local Kotli businesses", icon: Store },
  { label: "Multiple delivery services", icon: Bike },
  { label: "Real-time updates", icon: RefreshCw },
  { label: "Friendly local riders", icon: Users },
];

export default function ValueBar() {
  return (
    <section className="bg-[#ebf7ed] py-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {values.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#006e2b]/10 text-[#006e2b]">
                <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="text-base font-medium leading-6 text-[#141e18]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
