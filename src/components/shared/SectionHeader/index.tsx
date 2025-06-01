import { cn } from "@/utils";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  type?: "products" | "categories" | "blogs";
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function SectionHeader({
  title,
  type,
  children,
  size,
}: SectionHeaderProps) {
  return (
    <div
      aria-label="section-header"
      className="border-b-2 border-gray-100 my-3 flex items-center justify-between flex-wrap"
    >
      <div className="title-underline">
        <h4
          className={cn({
            "py-2 capitalize font-semibold border-blue-700": true,
            "text-2xl": !size || size === "lg",
            "text-xl": size === "md",
            "text-lg": size === "sm",
          })}
        >
          {title}
        </h4>

        <div className="relative w-full h-0.5">
          <div
            className={cn({
              "absolute inset-0 bg-blue-500 h-full": true,
              "w-48": !size || size === "lg",
              "w-36": size === "md",
              "w-16": size === "sm",
            })}
          ></div>
        </div>
      </div>

      {type ? (
        <Link
          to="#"
          className="flex items-center gap-1 text-blue-500 capitalize"
        >
          View all {type} <BsArrowRight />
        </Link>
      ) : children ? (
        children
      ) : null}
    </div>
  );
}
