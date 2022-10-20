import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ asChild, className, children }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-3 px-3 h-12 bg-violet-600 hover:bg-violet-500 text-white font-semibold w-full rounded transition-colors focus:ring-2 ring-white",
        className
      )}
    >
      {children}
    </Comp>
  );
}
