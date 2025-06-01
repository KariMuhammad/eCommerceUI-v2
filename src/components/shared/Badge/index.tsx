type BadgeProps = {
  text: string;
  color?: string;
};

export default function Badge({ text, color = "#eee" }: BadgeProps) {
  return (
    <div
      className={`py-1 px-2 border border-gray-100 rounded-md shadow-md cursor-pointer hover:border-gray-400 transition-all duration-200`}
      style={{
        backgroundColor: color,
        // hover
      }}
    >
      <span>{text}</span>
    </div>
  );
}
