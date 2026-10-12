import { useLayoutEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Details from '../components/Details';
export default function Home() {
  const site = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const node = site.current;
    if (!node) return;
    const update = () => node.style.setProperty('--canvas-width', String(node.clientWidth));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <main ref={site} className="site"><Hero /><Details /></main>;
}
