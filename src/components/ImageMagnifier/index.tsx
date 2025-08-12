import { useRef, useState } from "react";

type ImageMagnifierProps = {
  src: string;
  zoom?: number; // Zoom factor
  lensSize?: number; // Size of the magnifying lens
};

const ImageMagnifier = ({
  src,
  zoom = 2,
  lensSize = 100,
}: ImageMagnifierProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0, visible: false });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const imgBounds = imgRef.current?.getBoundingClientRect();
    const containerBounds = containerRef.current?.getBoundingClientRect();

    if (!imgBounds || !containerBounds) return;

    // Calculate mouse position relative to the image
    const x = e.clientX - imgBounds.left;
    const y = e.clientY - imgBounds.top;

    // Store image dimensions and offset from container
    const offsetX = imgBounds.left - containerBounds.left;
    const offsetY = imgBounds.top - containerBounds.top;

    setImageSize({
      width: imgBounds.width,
      height: imgBounds.height,
    });

    setImageOffset({ x: offsetX, y: offsetY });

    // Clamp lens inside image bounds
    const lensX = Math.max(
      0,
      Math.min(x - lensSize / 2, imgBounds.width - lensSize)
    );
    const lensY = Math.max(
      0,
      Math.min(y - lensSize / 2, imgBounds.height - lensSize)
    );

    // Position lens relative to container (accounting for image offset)
    setLensPos({
      x: lensX + offsetX,
      y: lensY + offsetY,
      visible: true
    });
  };

  const handleMouseLeave = () => {
    setLensPos({ ...lensPos, visible: false });
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="w-1/2 mx-auto">
        <img
          ref={imgRef}
          src={src}
          className="w-full h-full object-cover rounded"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          alt="Zoomable"
        />
      </div>

      {lensPos.visible && (
        <>
          {/* Lens */}
          <div
            className="absolute border-2 border-blue-400 bg-white/30 backdrop-blur-sm pointer-events-none"
            style={{
              width: lensSize,
              height: lensSize,
              left: lensPos.x,
              top: lensPos.y,
            }}
          />

          {/* Zoomed result */}
          <div
            className="absolute -right-1/2 top-0 w-[400px] h-[400px] border border-gray-300 rounded shadow overflow-hidden"
            style={{
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${imageSize.width * zoom}px ${imageSize.height * zoom}px`,
              backgroundPosition: `-${(lensPos.x - imageOffset.x) * zoom}px -${(lensPos.y - imageOffset.y) * zoom}px`,
            }}
          />
        </>
      )}
    </div>
  );
};

export default ImageMagnifier;