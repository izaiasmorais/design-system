import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export interface PropsRoot {
  children: ReactNode;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function TextInputIcon({ children }: PropsRoot) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = "TextInputIcon"

function TextInputRoot({ children }: PropsRoot) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-zinc-800 focus-within:ring-2 ring-violet-500  ">
      {children}
    </div>
  );
}

export function TextInputText({ className, ...rest }: TextInputProps) {
  return (
    <input
      className={clsx(
        "bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none",
        className
      )}
      {...rest}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputText,
  Icon: TextInputIcon,
};
