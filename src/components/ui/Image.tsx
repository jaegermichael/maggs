import type { CSSProperties, ImgHTMLAttributes } from "react";

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

export function Image({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  style,
  ...props
}: ImageProps) {
  const fillStyle: CSSProperties | undefined = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style }
    : style;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={fillStyle}
      {...props}
    />
  );
}

export default Image;
