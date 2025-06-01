interface BannerProps {
  children: React.ReactNode;
  attrs?: React.HTMLAttributes<HTMLDivElement>;
}
const Banner = ({ children, attrs }: BannerProps) => {
  return (
    <div
      aria-label="banner"
      className={`relative h-[483px] ${attrs?.className}`}
    >
      {children}
    </div>
  );
};

export default Banner;
