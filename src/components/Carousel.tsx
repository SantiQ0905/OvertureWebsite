import { useEffect, useRef, useState } from 'react';
import type { GalleryImage } from '../data/gallery';
import './Carousel.css';

interface CarouselProps {
  images: GalleryImage[];
  emptyLabel: string;
  intervalMs?: number;
}

export function Carousel({ images, emptyLabel, intervalMs = 4500 }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length < 2 || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, paused, intervalMs]);

  const trackRef = useRef<HTMLDivElement>(null);

  if (images.length === 0) {
    return (
      <div className="carousel-empty panel">
        <p>{emptyLabel}</p>
      </div>
    );
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="carousel-viewport panel">
        <div
          ref={trackRef}
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, i) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="carousel-dots" role="tablist">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${i + 1}/${images.length}`}
              className={i === index ? 'is-active' : ''}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
