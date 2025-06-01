interface CountryIconProps {
  code: string;
  text: string;
  sizes?: string;
  svg?: boolean;
}

const CDN_URL = "https://flagcdn.com";

export default function CountryIcon({
  code,
  text,
  sizes = "32x24",
  svg = false,
}: CountryIconProps) {
  const [width, height] = sizes.split("x");

  const flagCdn = svg
    ? `${CDN_URL}/${code}.svg`
    : `${CDN_URL}/${sizes}/${code}.png`.trim();

  return (
    <img
      src={flagCdn}
      srcSet={`${flagCdn.replace(sizes, "32x24")} 2x, ${flagCdn.replace(
        sizes,
        "48x36"
      )} 3x`}
      width={width}
      height={height}
      alt={text}
    />
  );
}
