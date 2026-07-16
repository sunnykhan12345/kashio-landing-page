"use client";

import { useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";

export default function LaunchCta() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="early-access" className="bg-[#f1fcf2] py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] bg-[#006e2b] px-6 py-14 text-center sm:px-12 md:px-20 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            aria-hidden="true"
          >
            <svg
              className="h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path
                d="M0 100 C 20 0 50 0 100 100"
                fill="transparent"
                stroke="white"
                strokeWidth="0.5"
              />
              <path
                d="M0 0 C 50 100 80 100 100 0"
                fill="transparent"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-3xl space-y-8">
            <h2 className="text-base lg:text-4xl font-semibold leading-7 text-white">
              Kotli, your deliveries are about to get easier.
            </h2>
            <p className="text-base leading-7 text-white/90">
              Sign up for early access and get PKR 500 off on your first order
              when we launch.
            </p>

            {submitted ? (
              <p
                className="mx-auto max-w-lg rounded-full bg-white px-6 py-4 text-base font-medium text-[#006e2b]"
                role="status"
              >
                Thank you. You&apos;re on the Kashio early-access list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-lg flex-col gap-4 md:flex-row"
              >
                <label htmlFor="early-access-contact" className="sr-only">
                  Email or phone number
                </label>
                <input
                  id="early-access-contact"
                  name="contact"
                  required
                  type="text"
                  autoComplete="email"
                  placeholder="Enter your email or phone number"
                  className="min-h-14 flex-1 rounded-full border-0 bg-white px-6 text-base text-[#141e18] outline-none transition-shadow duration-200 placeholder:text-[#64748b] focus:ring-2 focus:ring-[#93f5a4] focus:ring-offset-2 focus:ring-offset-[#006e2b]"
                />
                <Button
                  type="submit"
                  variant="soft"
                  size="lg"
                  className="shrink-0"
                >
                  Notify Me
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
