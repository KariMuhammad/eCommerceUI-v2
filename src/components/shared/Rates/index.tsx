import { useState } from "react";
import RateStar from "./RateStar";

type RatesProps = {
  stars?: number;
  rate: number; // Number of stars
  isFixed: boolean;
  sizeStars?: number;
  className?: string;
};

export default function Rates({
  isFixed,
  stars = 5,
  sizeStars = 7,
  rate,
  className,
}: RatesProps) {
  if (stars <= 0) throw new Error("Stars must be greater than zero");
  if (rate < 0) throw new Error("Rate must be greater than or equal to zero");

  const [hoverRank, setHoverRank] = useState<number>(0);
  const [activeRank, setActiveRank] = useState<number>(rate);

  const previewRate = isFixed ? rate : hoverRank || activeRank;

  return (
    <div className={`rates flex ${className || ""}`}>
      {Array.from({ length: stars }).map((_, index) => {
        console.log(_); // undefined
        return (
          <RateStar
            key={index}
            active={index < previewRate}
            className={`w-${sizeStars} h-${sizeStars}`}
            onMouseEnter={() => !isFixed && setHoverRank(index + 1)}
            onMouseDown={() => !isFixed && setActiveRank(index + 1)}
            onMouseLeave={() => !isFixed && setHoverRank(0)}
          />
        );
      })}
    </div>
  );
}
