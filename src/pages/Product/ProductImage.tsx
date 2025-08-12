import ImageMagnifier from "@/components/ImageMagnifier";
import { cn } from "@/utils";
import { useState } from "react";

type ProductImageProps = {
  images: string[];
}

export function ProductImage({ images }: ProductImageProps) {
  const [imgUrl, setImgUrl] = useState(images[0]);

  const handleImageChange = (url: string) => {
    setImgUrl(url);
  };

  return (
    <div className="relative product-image-preview basis-1/2">
      <ImageMagnifier src={imgUrl} zoom={2} lensSize={300} />
      <div className="lg:absolute hidden left-3 top-3 mini-samples sm:flex flex-row lg:flex-col gap-2 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn({
              "w-20 h-20  cursor-pointer hover:opacity-80 transition-opacity duration-300":
                true,
              "border-2 border-blue-500": imgUrl === image,
            })}
          >
            <img
              src={image}
              alt={`mini-sample-${index}`}
              className="w-full  object-cover rounded-lg"
              onClick={() => handleImageChange(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
