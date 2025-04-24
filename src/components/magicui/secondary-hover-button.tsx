import React from "react";
import { cn } from "../../lib/utils";

export const SecondaryHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
      "group relative w-auto cursor-pointer overflow-hidden rounded-lg border bg-transparent text-foreground hover:bg-background p-2 px-6 text-center font-semibold transition-all duration-300",
      className,
      )}
      {...props}
      onClick={() => window.location.href = "https://cloudaionbase.netlify.app/docs/"}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 transition-all duration-300"></div>

      <div className="relative flex items-center gap-2">
      <span className="inline-block transition-all duration-300 group-hover:translate-xs-12 group-hover:opacity-100">
        {children}
      </span>
      </div>
    </button>
  );
});

SecondaryHoverButton.displayName = "SecondaryHoverButton";
