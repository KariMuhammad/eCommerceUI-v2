import { cn } from "@/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full py-2 px-4 text-center bg-black text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
