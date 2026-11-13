import { useEffect } from "react";
import { X, Maximize2 } from "lucide-react";

export default function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <div className="lightbox-toolbar"><span><Maximize2 size={14}/> PREVIEW / FULL RESOLUTION</span><button type="button" onClick={onClose} aria-label="Close image preview"><X size={20}/></button></div>
    <img src={image.src} alt={image.alt} className="lightbox-image" />
  </div>;
}
