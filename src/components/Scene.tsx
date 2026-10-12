import { useEffect, useRef } from 'react';
import heroPoster from '../static/images/hero-poster.png';
import detailsPoster from '../static/images/details-poster.png';

export default function Scene({ kind }: { kind: 'hero' | 'details' }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      if (!ref.current) return;
      if (media.matches) ref.current.pause();
      else void ref.current.play().catch(() => {});
    };
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return <video ref={ref} className={`scene scene--${kind}`} muted loop playsInline preload="metadata"
    poster={kind === 'hero' ? heroPoster : detailsPoster} aria-hidden="true" tabIndex={-1}>
    <source src={`${import.meta.env.BASE_URL}videos/${kind}.mp4`} type="video/mp4" />
  </video>;
}
