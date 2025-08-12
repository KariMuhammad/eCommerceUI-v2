export default function Blog() {
  return (
    <div
      aria-label="blog-card"
      className="relative w-96 shadow-md rounded-md bg-white"
    >
      <div aria-label="image-wrapper" className="">
        <img src="/public/blog-1.webp" className="w-full" />
      </div>

      <div aria-label="content-blog" className="p-5">
        <h5 className="text-black font-semibold text-lg leading-tight">
          Limited Edition Safari & Silver Summicron M-Lenses
        </h5>

        <p className="flex items-center gap-1 text-gray-700 mt-1 mb-3 uppercase text-xs">
          Post by
          <span className="font-semibold text-cyan-500 capitalize">
            Karim Muhammad
          </span>
        </p>

        <p aria-label="description-blog" className="line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis
          orci at lectus fauc ibus, vitae finibus sapien semper. Donec viverra,
        </p>

        <hr className="border border-b-gray-100 my-6" />

        <div
          aria-label="read-link-and-date"
          className="flex items-center justify-between"
        >
          <a href="#" className="uppercase font-bold text-xs">
            read more
          </a>

          <div aria-label="date-blog" className="text-gray-700 text-xs">
            OCT, 25, 2023
          </div>
        </div>
      </div>

      <div aria-label="category-blog" className="absolute top-2 left-2">
        <div className="text-white bg-cyan-500 text-xs px-3 py-1 tracking-tight font-sans font-medium uppercase">
          Technology
        </div>
      </div>
    </div>
  );
}
