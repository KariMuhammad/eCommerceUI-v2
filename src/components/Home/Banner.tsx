interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const Banner = ({ children, ...attributes }: BannerProps) => {
  return (
    <div
      aria-label="banner"
      {...attributes}
      className={`relative ${attributes.className}`}
    >
      {children}
    </div>
  );
};

export default Banner;
