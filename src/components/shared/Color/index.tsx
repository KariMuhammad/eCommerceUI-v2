import Circle from "../Circle";

type ColorProps = {
  color: string;
  className?: string;
};

const Color = ({ color, ...props }: ColorProps) => {
  return (
    <Circle
      className="border-gray-50 border hover:scale-110 transition-all duration-200 cursor-pointer"
      {...props}
      style={{ backgroundColor: color }}
    />
  );
};

export default Color;
