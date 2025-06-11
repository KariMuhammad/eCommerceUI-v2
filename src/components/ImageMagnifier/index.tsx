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
  const [lensPos, setLensPos] = useState({ x: 0, y: 0, visible: false });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = imgRef.current?.getBoundingClientRect();
    if (!bounds) return;
    // Calculate mouse position relative to the image
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    setImageSize({
      width: bounds.width,
      height: bounds.height,
    });

    console.log("Mouse event:", e.clientX, e.clientY);
    console.log("Image bounds:", bounds);
    console.log("Mouse position:", { x, y });

    // Clamp lens inside image
    /**
     * How this formula figured out ?
     * 1. We want the lens to be centered around the mouse position.
     * 2. The lens should not go outside the image bounds.
     * 3. The lens size is subtracted from the mouse position to center it.
     * 4. The result is clamped to ensure it stays within the image bounds.
     * 5. The maximum value is the image width/height minus the lens size to ensure it doesn't overflow.
     * 6. The minimum value is 0 to ensure it doesn't go negative.
     *  This ensures the lens is always fully visible within the image.
     * This is why we use Math.max and Math.min to clamp the values.
     * This way, the lens will always be positioned correctly
     * and will not overflow the image boundaries.
     */
    const lensX = Math.max(
      0,
      Math.min(x - lensSize / 2, bounds.width - lensSize)
    );
    const lensY = Math.max(
      0,
      Math.min(y - lensSize / 2, bounds.height - lensSize)
    );

    setLensPos({ x: lensX, y: lensY, visible: true });
  };

  const handleMouseLeave = () => {
    setLensPos({ ...lensPos, visible: false });
  };

  return (
    <div className="relative">
      <img
        ref={imgRef}
        src={src}
        className="w-full h-full object-cover rounded"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        alt="Zoomable"
      />

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
              backgroundSize: `${imageSize.width * zoom}px ${
                imageSize.height * zoom
              }px`,
              backgroundPosition: `-${lensPos.x * zoom}px -${
                lensPos.y * zoom
              }px`,
            }}
          />
        </>
      )}
    </div>
  );
};

export default ImageMagnifier;
