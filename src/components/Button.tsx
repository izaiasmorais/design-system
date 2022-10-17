import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ asChild, children }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold w-full rounded transition-colors"
      )}
    >
      {children}
    </Comp>
  );
}
