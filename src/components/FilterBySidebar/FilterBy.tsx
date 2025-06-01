import { useState } from "react";
import { FilterByHeader } from "./FilterByHeader";
import { cn } from "@/utils";

type FilterByProps = {
  by: string;
  children: React.ReactNode;
};
export function FilterBy({ by, children }: FilterByProps) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => setIsOpen((p) => !p);

  return (
    <div
      aria-label={`filter-by-${by}`}
      className="pb-8 border-b-2 border-gray-50"
    >
      <FilterByHeader title={by} isOpen={isOpen} toggleOpen={toggleOpen} />

      <div
        className={cn({
          "transition-transform duration-200 pt-4": true,
          "hidden opacity-0 invisible -translate-y-1/2": !isOpen,
          "translate-y-0 block visible opacity-100": isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
}
