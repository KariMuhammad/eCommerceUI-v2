import { BsStar } from "react-icons/bs";

type RateStarProps = {
  active: boolean;
} & React.HTMLProps<HTMLDivElement>;

export default function RateStar({ active, ...restProps }: RateStarProps) {
  return (
    <div {...restProps}>
      <BsStar
        className="w-full h-full"
        fill={active ? "orange" : "#ccc"}
        stroke="transparent"
      />
    </div>
  );
}
