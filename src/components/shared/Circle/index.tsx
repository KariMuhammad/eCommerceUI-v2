type CircleProps = {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any; // Allow any other props to be passed
};

const Circle = ({ className, ...props }: CircleProps) => {
  return (
    <div
      {...props}
      className={`w-6 h-6 rounded-full shadow-md outline-none border-neutral-100 ${
        className ?? ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Circle;
