import React from "react";
import { cn } from "../../lib/utils";
import { FaArrowUpRightDots } from "react-icons/fa6";

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-lg bg-gradient-to-r from-violet-600 to-cyan-300 text-white p-2 px-6 text-center font-semibold transition-all duration-300",
        className,
      )}
      {...props}
      onClick={() => window.location.href = "https://cloudhubonbase.netlify.app/"}
    >
      <div className="absolute inset-0 bg-background transition-all duration-300 scale-0 group-hover:scale-100"></div>

      <div className="relative flex items-center gap-2">
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full items-center justify-center gap-2 text-foreground animate-gradient opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <FaArrowUpRightDots />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
