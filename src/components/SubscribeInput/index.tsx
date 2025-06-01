type SubscribeInputProps = {
  className?: string;
};

export default function SubscribeInput({
  className = "",
}: SubscribeInputProps) {
  return (
    <div
      className={`relative w-full bg-white rounded-md p-3 border ${className}`}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="block w-full outline-none text-black selection:bg-slate-950 selection:text-cyan-400"
      />

      <button className="lg:absolute right-0 w-full top-0 md:w-fit inset-y-0 bg-cyan-500 text-white rounded-md px-4">
        Subscribe
      </button>
    </div>
  );
}
