type CardProps = {
  image: string;
  name: string;
};

export default function Card({ image, name }: CardProps) {
  return (
    <div
      aria-label="card"
      className="group overflow-hidden flex flex-col gap-2 transition-all duration-200"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full max-h-48 object-contain rounded-md group-hover:scale-110 transition-transform duration-200"
        loading="lazy"
      />
      <h4 className="text-lg font-semibold text-center">{name}</h4>
    </div>
  );
}
