"use client";

import { CldImage } from "next-cloudinary";

/**
 * Helper to extract Public ID from a full Cloudinary URL.
 * Example: https://res.cloudinary.com/cloudname/image/upload/v123/public_id.jpg -> public_id
 */
const getPublicId = (src) => {
  if (!src || typeof src !== 'string') return "";
  
  // If it's already a clean Public ID (no slashes or just folders)
  if (!src.includes("cloudinary.com") && !src.startsWith('http')) {
    return src;
  }

  try {
    // 1. Get everything after /upload/
    const uploadMatch = src.split('/upload/');
    if (uploadMatch.length < 2) return src;
    
    let remainder = uploadMatch[1]; // e.g. "v12345/folder/image.jpg"
    
    // 2. Remove the version (vNNNNN) prefix if present
    const parts = remainder.split('/');
    if (parts.length > 1 && /^v\d+$/.test(parts[0])) {
      remainder = parts.slice(1).join('/');
    }
    
    // 3. Remove the extension
    const dotIndex = remainder.lastIndexOf('.');
    if (dotIndex !== -1) {
      return remainder.substring(0, dotIndex);
    }
    
    return remainder;
  } catch (e) {
    return src;
  }
};

export default function CloudinaryImage({ 
  src, 
  alt, 
  priority = false,
  ...props 
}) {
  const publicId = getPublicId(src);

  return (
    <CldImage
      src={publicId}
      alt={alt}
      width={!props.fill ? (props.width || 1920) : undefined}
      height={!props.fill ? (props.height || 1080) : undefined}
      fill={props.fill}
      className={props.className}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      quality={props.quality || "auto:best"}
      format="auto"
      dpr="auto"
      crop="fill"
      gravity="auto"
      sizes={props.sizes || (props.fill ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw")}
      {...props}
    />
  );
}
