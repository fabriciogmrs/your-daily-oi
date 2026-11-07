// Meta Pixel — loaded only outside consent-required regions (no-banner route).
export const META_PIXEL_ID = '1091154603924213';

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
};
declare global {
  interface Window { fbq?: Fbq; _fbq?: Fbq; }
}

const CONSENT_REGIONS = new Set([
  'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH',
]);

let started = false;

function gpcOptOut() {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

async function regionAllowsTracking(): Promise<boolean> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 2000);
    const res = await fetch('/cdn-cgi/trace', { signal: ctrl.signal });
    clearTimeout(t);
    if (!res.ok) return false;
    const text = await res.text();
    const get = (k: string) => text.match(new RegExp(`^${k}=(.*)$`, 'm'))?.[1]?.trim();
    const loc = get('loc');
    const host = get('h');
    if (!loc || loc === 'XX' || loc === 'T1') return false;
    if (host && host !== window.location.host) return false;
    return !CONSENT_REGIONS.has(loc);
  } catch {
    return false;
  }
}

function call(...args: unknown[]) {
  const f = window.fbq;
  if (!f) return;
  if (f.callMethod) f.callMethod.apply(f, args);
  else f.queue.push(args);
}

export async function initMetaPixel() {
  if (started || typeof window === 'undefined') return;
  started = true;
  if (gpcOptOut() || !(await regionAllowsTracking())) return;
  if (!window.fbq) {
    const n = function (...args: unknown[]) {
      if (n.callMethod) n.callMethod.apply(n, args);
      else n.queue.push(args);
    } as Fbq;
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
    window.fbq = n;
    if (!window._fbq) window._fbq = n;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(s);
  }
  call('init', META_PIXEL_ID, {}, { agent: 'lovable' });
  call('track', 'PageView');
}
