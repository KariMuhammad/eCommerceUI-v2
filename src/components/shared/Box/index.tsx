type BoxProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Box({ className = "", children }: BoxProps) {
  return (
    <div
      className={`p-3 border border-gray-100 bg-white rounded-md shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
