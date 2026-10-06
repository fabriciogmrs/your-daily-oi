import type { ReactNode } from 'react';

export type SheetKind = 'maze' | 'letters' | 'numbers' | 'dots' | 'match' | 'color' | 'trace' | 'shapes';

const C = { ink: 'var(--foreground)', sun: 'var(--sun)', orange: 'var(--tangerine)', sky: 'var(--sky)', leaf: 'var(--leaf)', pink: 'var(--bubble)', grape: 'var(--grape)', line: 'var(--border)' };

const titles: Record<SheetKind, [string, string]> = {
  maze: ['Labirinto', 'Ajude a abelhinha a chegar na flor!'],
  letters: ['Alfabetização', 'Complete com a letra que falta.'],
  numbers: ['Matemática', 'Conte e escreva quantos são.'],
  dots: ['Ligue os pontos', 'Siga os números de 1 a 12.'],
  match: ['Associação', 'Ligue cada bichinho à sua casa.'],
  color: ['Para colorir', 'Pinte cada parte com a cor indicada.'],
  trace: ['Coordenação', 'Cubra o tracejado com o lápis.'],
  shapes: ['Raciocínio', 'Qual forma vem a seguir?'],
};

function Art({ kind }: { kind: SheetKind }): ReactNode {
  const s = { stroke: C.ink, strokeWidth: 3, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (kind) {
    case 'maze': return <g {...s}>
      <rect x="10" y="10" width="180" height="140" rx="8" />
      <path d="M10 45h60M100 10v45h50M190 80h-70v35M40 150v-40h40v-30M150 150v-35M70 45v35M120 80V55" />
      <path d="M25 30 C60 30 85 65 85 95 S130 130 170 130" stroke={C.orange} strokeDasharray="2 9" strokeWidth="4" />
      <circle cx="25" cy="28" r="9" fill={C.sun} /><circle cx="172" cy="130" r="9" fill={C.pink} /></g>;
    case 'letters': return <g fontFamily="Baloo 2, sans-serif" fontWeight="800" fontSize="34">
      {[['B', 'O', 'L', 'A', C.pink], ['G', 'A', '_', 'O', C.sky], ['S', 'O', '_', '', C.leaf]].map((row, r) =>
        <g key={r}>{row.slice(0, 4).map((l, i) => <g key={i}><rect x={14 + i * 44} y={10 + r * 48} width="38" height="40" rx="8" fill={l === '_' ? C.sun : 'var(--muted)'} opacity={l === '' ? 0 : 1} /><text x={33 + i * 44} y={42 + r * 48} textAnchor="middle" fill={l === '_' ? C.ink : (row[4] as string)}>{l === '_' ? '?' : l}</text></g>)}</g>)}</g>;
    case 'numbers': return <g>
      {[[3, C.orange], [5, C.sky], [2, C.leaf]].map(([n, col], r) => <g key={r}>
        {Array.from({ length: n as number }).map((_, i) => <circle key={i} cx={22 + i * 24} cy={30 + r * 48} r="9" fill={col as string} />)}
        <rect x="150" y={14 + r * 48} width="38" height="34" rx="8" fill="none" stroke={C.ink} strokeWidth="3" strokeDasharray="5 5" /></g>)}</g>;
    case 'dots': { const pts = [[100, 15], [125, 50], [165, 55], [135, 85], [145, 125], [100, 105], [55, 125], [65, 85], [35, 55], [75, 50]];
      return <g><path d={'M' + pts.map(p => p.join(' ')).join('L') + 'Z'} {...s} stroke={C.grape} strokeDasharray="3 7" />
        {pts.map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="4" fill={C.ink} /><text x={x + 7} y={y - 5} fontSize="11" fontWeight="800" fill={C.ink}>{i + 1}</text></g>)}</g>; }
    case 'match': return <g fontSize="30">
      {['🐶', '🐟', '🐦'].map((a, i) => <text key={a} x="14" y={40 + i * 50}>{a}</text>)}
      {['🪺', '🏠', '🌊'].map((a, i) => <text key={a} x="150" y={40 + i * 50}>{a}</text>)}
      <path d="M55 30 C100 30 110 80 145 80 M55 80 C100 80 110 130 145 130 M55 130 C100 130 110 30 145 30" {...s} stroke={C.pink} strokeDasharray="4 6" /></g>;
    case 'color': return <g {...s}>
      <circle cx="100" cy="70" r="30" fill={C.sun} />
      {Array.from({ length: 8 }).map((_, i) => { const a = (i * Math.PI) / 4; return <ellipse key={i} cx={100 + Math.cos(a) * 50} cy={70 + Math.sin(a) * 50} rx="16" ry="12" transform={`rotate(${(i * 45)} ${100 + Math.cos(a) * 50} ${70 + Math.sin(a) * 50})`} fill={i % 3 === 0 ? C.pink : 'none'} />; })}
      <path d="M100 120v35" stroke={C.leaf} strokeWidth="5" /></g>;
    case 'trace': return <g {...s}>
      {[0, 1, 2].map(r => <path key={r} d={`M14 ${30 + r * 48} q 14 -24 28 0 t 28 0 t 28 0 t 28 0 t 28 0 t 28 0`} stroke={[C.sky, C.orange, C.leaf][r]} strokeDasharray="5 7" strokeWidth="4" />)}
      <circle cx="14" cy="30" r="5" fill={C.sky} stroke="none" /></g>;
    case 'shapes': return <g strokeWidth="3" stroke={C.ink}>
      <circle cx="30" cy="45" r="18" fill={C.pink} /><rect x="62" y="27" width="36" height="36" rx="6" fill={C.sky} /><polygon points="130,25 150,63 110,63" fill={C.sun} />
      <circle cx="30" cy="115" r="18" fill={C.pink} /><rect x="62" y="97" width="36" height="36" rx="6" fill={C.sky} />
      <rect x="112" y="97" width="38" height="38" rx="8" fill="none" strokeDasharray="5 5" /><text x="131" y="124" textAnchor="middle" fontSize="22" fontWeight="800" fill={C.ink} stroke="none">?</text>
      <circle cx="178" cy="45" r="8" fill={C.leaf} stroke="none" /></g>;
  }
}

export function ActivitySheet({ kind, className = '', style }: { kind: SheetKind; className?: string; style?: React.CSSProperties }) {
  const [title, prompt] = titles[kind];
  return <div className={`sheet flex flex-col p-3.5 ${className}`} style={style} aria-hidden="true">
    <div className="flex items-center justify-between border-b-2 border-dashed border-border pb-2">
      <span className="font-heading text-sm font-extrabold leading-none">{title}</span>
      <span className="text-[9px] font-bold text-muted-foreground">Nome: ________</span>
    </div>
    <p className="mt-1.5 text-[10px] font-semibold leading-tight text-muted-foreground">{prompt}</p>
    <svg viewBox="0 0 200 160" className="mt-2 w-full flex-1"><Art kind={kind} /></svg>
  </div>;
}
