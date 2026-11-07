import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => {
  vi.unstubAllGlobals();
  delete window.fbq;
  delete window._fbq;
});

describe('Sales page pixel events', () => {
  it('reports only PageView, leaving checkout events to Cakto', async () => {
    vi.resetModules();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      text: async () => `loc=BR\nh=${window.location.host}\n`,
    }));
    const { initMetaPixel } = await import('@/lib/meta-pixel');
    await initMetaPixel();
    const events = window.fbq?.queue.filter(args => args[0] === 'track').map(args => args[1]);
    expect(events).toEqual(['PageView']);
  });
});