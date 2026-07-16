import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006e2b] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-[#006e2b] text-white shadow-[0_8px_20px_rgba(0,110,43,0.12)] hover:-translate-y-0.5 hover:bg-[#005c24] hover:shadow-[0_12px_26px_rgba(0,110,43,0.18)]",
        secondary:
          "bg-[#e0ebe1] text-[#141e18] hover:-translate-y-0.5 hover:bg-[#d5e2d7]",
        soft:
          "bg-[#93f5a4] text-[#005322] hover:-translate-y-0.5 hover:bg-white",
        ghost:
          "bg-transparent text-[#006e2b] shadow-none hover:bg-[#006e2b]/5",
      },
      size: {
        default: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-base",
        sm: "h-10 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
