import { cn } from "@/lib/utils";

export default function Container({ className, children }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 md:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
