import React from "react";

/**
 * Picture · responsive WebP source set for hinsdale-cedar imagery.
 * Pass the desktop path (e.g. `/assets/photos/projects/hinsdale-cedar/eric/eric-front.webp`)
 * and the component will pair it with the matching @mobile.webp variant when present.
 */
export default function Picture({
  src,
  alt = "",
  className = "",
  loading = "lazy",
  fetchPriority,
  sizes = "100vw",
  width,
  height,
  ...rest
}) {
  // derive mobile variant path
  const mobileSrc = src.replace(/\.webp$/, "@mobile.webp");

  return (
    <picture>
      <source srcSet={mobileSrc} media="(max-width: 768px)" type="image/webp" />
      <source srcSet={src} type="image/webp" />
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchpriority={fetchPriority}
        sizes={sizes}
        width={width}
        height={height}
        className={className}
        {...rest}
      />
    </picture>
  );
}
