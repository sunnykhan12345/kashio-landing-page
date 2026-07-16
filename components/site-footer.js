import { Instagram, ShieldCheck, Twitter } from "lucide-react";
import Container from "@/components/container";

const serviceLinks = [
  "Food Delivery",
  "Grocery Shopping",
  "Medicine Express",
  "Parcel & Courier",
  "Gift Delivery",
];

const companyLinks = [
  "About Us",
  "Join as Rider",
  "Merchant Portal",
  "Careers",
  "Contact Us",
];

export default function SiteFooter() {
  return (
    <footer
      id="footer"
      className="border-t border-[#bccbb8]/20 bg-[#ebf7ed] pb-12 pt-20"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div className="space-y-6">
            <a
              href="#home"
              className="inline-block text-base font-bold tracking-[-0.02em] text-[#006e2b] transition-opacity duration-200 hover:opacity-75"
            >
              Kashio
            </a>
            <p className="max-w-[290px] text-base leading-6 text-[#3d4a3c]">
              Connecting Kotli&apos;s vibrant community through smart, local
              logistics. Making everyday life simpler for everyone.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Kashio on X"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e0ebe1] text-[#006e2b] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#006e2b] hover:text-white"
              >
                <Twitter size={19} fill="currentColor" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Kashio on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e0ebe1] text-[#006e2b] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#006e2b] hover:text-white"
              >
                <Instagram size={19} aria-hidden="true" />
              </a>
            </div>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Company" links={companyLinks} />

          <div className="space-y-6">
            <h2 className="text-base font-medium text-[#141e18]">
              Legal &amp; Settings
            </h2>
            <ul className="space-y-4 text-base text-[#3d4a3c]">
              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-[#006e2b]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-[#006e2b]"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <label htmlFor="language" className="sr-only">
                  Select language
                </label>
                <select
                  id="language"
                  defaultValue="en"
                  className="w-full rounded-lg border-0 bg-[#e0ebe1] px-4 py-2 text-base text-[#3d4a3c] outline-none transition-shadow duration-200 focus:ring-2 focus:ring-[#006e2b]"
                >
                  <option value="en">English (US)</option>
                  <option value="ur">Urdu (اردو)</option>
                </select>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[#bccbb8]/20 pt-8 md:flex-row">
          <p className="text-base text-[#3d4a3c]">
            © 2026 Kashio Pakistan. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[#3d4a3c]">
            <ShieldCheck
              size={19}
              className="text-[#006e2b]"
              aria-hidden="true"
            />
            <span className="text-base">Secured by Kotli Secure Payments</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="space-y-6">
      <h2 className="text-base font-medium text-[#141e18]">{title}</h2>
      <ul className="space-y-4 text-base text-[#3d4a3c]">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-[#006e2b]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
