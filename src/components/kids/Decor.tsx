import { useEffect, type CSSProperties } from 'react';

type P = { className?: string; style?: CSSProperties };

export const Star = ({ className = '', style }: P) => <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden="true"><path d="M20 3l5 11 12 1.5-9 8 2.5 12L20 29.5 9.5 35.5 12 23.5l-9-8L15 14z" fill="currentColor" stroke="var(--foreground)" strokeWidth="2" strokeLinejoin="round" /></svg>;
export const Cloud = ({ className = '', style }: P) => <svg viewBox="0 0 80 46" className={className} style={style} aria-hidden="true"><path d="M20 42h44a14 14 0 000-28 18 18 0 00-34-4A16 16 0 0020 42z" fill="currentColor" /></svg>;
export const Squiggle = ({ className = '', style }: P) => <svg viewBox="0 0 80 20" className={className} style={style} aria-hidden="true"><path d="M3 10q9-12 18 0t18 0 18 0 18 0" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg>;
export const Dot = ({ className = '', style }: P) => <span className={`block rounded-full ${className}`} style={style} aria-hidden="true" />;
export const Pencil = ({ className = '', style }: P) => <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden="true"><g stroke="var(--foreground)" strokeWidth="2.5" strokeLinejoin="round"><path d="M10 42L40 12l8 8-30 30-10 2z" fill="var(--sun)" /><path d="M40 12l4-4a3 3 0 014 0l4 4a3 3 0 010 4l-4 4z" fill="var(--bubble)" /><path d="M10 42l8 8-10 2z" fill="var(--foreground)" /></g></svg>;

/** Adds the `in` class to every `.reveal` element as it enters the viewport. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
