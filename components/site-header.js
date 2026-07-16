"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home", active: true },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Businesses", href: "#partners" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#footer" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-[#bccbb8]/30 bg-[#f1fcf2]/90 shadow-[0_1px_4px_rgba(23,33,27,0.05)] backdrop-blur-md">
      <Container className="flex h-full items-center justify-between">
        <div className="flex items-center gap-12">
          <Link
            href="#home"
            aria-label="Kashio home"
            className="relative block h-[52px] w-[118px] shrink-0 overflow-hidden rounded-md transition-opacity duration-200 hover:opacity-80 sm:h-[46px] sm:w-[130px]"
          >
            <Image
              src="/images/logo.jpeg"
              alt="Kashio"
              fill
              priority
              sizes="(max-width: 640px) 118px, 130px"
              className="object-cover object-center"
            />
          </Link>
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link py-1 text-base font-medium text-[#3d4a3c] ${
                  item.active ? "nav-link-active font-bold !text-[#006e2b]" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:block">
          <Button asChild size="default" className="px-6 text-white!">
            <a href="#early-access">Download App</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#006e2b] transition-colors duration-200 hover:bg-[#006e2b]/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006e2b] md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <div
        className={`absolute inset-x-0 top-20 border-b border-[#bccbb8]/30 bg-[#f1fcf2] px-4 shadow-lg transition-all duration-300 md:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1280px] flex-col py-5"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-[#3d4a3c] transition-colors duration-200 hover:bg-[#e5f1e7] hover:text-[#006e2b]"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="mt-3 w-full">
            <a href="#early-access" onClick={() => setOpen(false)}>
              Download App
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
