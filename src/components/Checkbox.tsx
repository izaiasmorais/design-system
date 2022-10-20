import * as CheckBoxRoot from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps {
  className?: string;
}

export function Checkbox({ className }: CheckboxProps) {
  return (
    <CheckBoxRoot.Root className="w-6 h-6 p-[1px] bg-gray-800 rounded">
      <CheckBoxRoot.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-violet-500" />
      </CheckBoxRoot.Indicator>
    </CheckBoxRoot.Root>
  );
}
