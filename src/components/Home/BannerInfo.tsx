interface BannerInfoProps {
  title: string;
  description: string;
}

export default function BannerInfo({ title, description }: BannerInfoProps) {
  return (
    <div
      aria-label="banner-info"
      className="absolute top-1/2 -translate-y-1/2 left-3"
    >
      <h5 className="text-2xl font-bold text-white">{title}</h5>
      <p className="text-gray-100 text-lg">{description}</p>
    </div>
  );
}
