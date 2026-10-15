import type { CSSProperties, ReactNode } from 'react';

export type SheetKind = 'maze' | 'letters' | 'numbers' | 'dots' | 'match' | 'color' | 'trace' | 'shapes' | 'wordsearch' | 'math' | 'shadow' | 'draw';

const C = {
  ink: 'var(--foreground)',
  soft: 'var(--muted-foreground)',
  line: 'var(--border)',
  muted: 'var(--muted)',
  sun: 'var(--sun)', sunSoft: 'var(--sun-soft)',
  orange: 'var(--tangerine)', orangeSoft: 'var(--tangerine-soft)',
  sky: 'var(--sky)', skySoft: 'var(--sky-soft)',
  leaf: 'var(--leaf)', leafSoft: 'var(--leaf-soft)',
  pink: 'var(--bubble)', pinkSoft: 'var(--bubble-soft)',
  grape: 'var(--grape)', grapeSoft: 'var(--grape-soft)',
};

const meta: Record<SheetKind, { title: string; prompt: string; icon: string; level: string; band: string; page: number }> = {
  maze: { title: 'Labirinto', prompt: 'Ajude a abelhinha a chegar até a flor!', icon: '🐝', level: 'fácil', band: C.sunSoft, page: 12 },
  letters: { title: 'Alfabetização', prompt: 'Complete cada palavra com a letra que falta.', icon: '🔤', level: 'fácil', band: C.pinkSoft, page: 34 },
  numbers: { title: 'Contagem', prompt: 'Conte os itens e escreva o número certo.', icon: '🔢', level: 'fácil', band: C.skySoft, page: 58 },
  dots: { title: 'Ligue os pontos', prompt: 'Siga os números de 1 a 12 e veja o que aparece.', icon: '🚀', level: 'médio', band: C.grapeSoft, page: 71 },
  match: { title: 'Associação', prompt: 'Ligue cada bichinho até a sua casinha.', icon: '🐾', level: 'fácil', band: C.leafSoft, page: 19 },
  color: { title: 'Pinte pelo número', prompt: 'Pinte cada parte seguindo a cor do número.', icon: '🎨', level: 'médio', band: C.orangeSoft, page: 46 },
  trace: { title: 'Coordenação motora', prompt: 'Cubra o tracejado sem sair da linha.', icon: '✏️', level: 'fácil', band: C.skySoft, page: 8 },
  shapes: { title: 'Raciocínio lógico', prompt: 'Descubra qual figura vem no lugar da interrogação.', icon: '🧩', level: 'médio', band: C.sunSoft, page: 88 },
  wordsearch: { title: 'Caça-palavras', prompt: 'Encontre as 4 palavras escondidas no quadro.', icon: '🔎', level: 'difícil', band: C.leafSoft, page: 103 },
  math: { title: 'Continhas', prompt: 'Resolva e pinte a resposta pela cor da legenda.', icon: '➕', level: 'médio', band: C.pinkSoft, page: 62 },
  shadow: { title: 'Sombras', prompt: 'Ligue cada figura até a sua sombra.', icon: '🌗', level: 'médio', band: C.grapeSoft, page: 27 },
  draw: { title: 'Complete o desenho', prompt: 'Desenhe a outra metade e pinte o seu.', icon: '🦋', level: 'difícil', band: C.orangeSoft, page: 77 },
};

const E = ({ x, y, ch, size = 18 }: { x: number; y: number; ch: string; size?: number }) =>
  <text x={x} y={y} fontSize={size} textAnchor="middle">{ch}</text>;

const Dash = ({ x, y, w, h, rx = 8, col = C.ink }: { x: number; y: number; w: number; h: number; rx?: number; col?: string }) =>
  <rect x={x} y={y} width={w} height={h} rx={rx} fill="none" stroke={col} strokeWidth="2.5" strokeDasharray="5 4" />;

const Tile = ({ x, y, txt, fill, s = 30 }: { x: number; y: number; txt: string; fill: string; s?: number }) => (
  <g>
    <rect x={x} y={y} width={s} height={s} rx="7" fill={fill} />
    <text x={x + s / 2} y={y + s / 2 + 8} fontSize="19" fontWeight="800" textAnchor="middle" fill={C.ink}>{txt}</text>
  </g>
);

function Art({ kind }: { kind: SheetKind }): ReactNode {
  const s = { stroke: C.ink, strokeWidth: 2.6, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (kind) {
    case 'maze': {
      const walls = ['M20 140h56', 'M112 100v40h46', 'M220 104v50h-58', 'M56 250v-44h42', 'M142 250v-38h38',
        'M92 162v34', 'M162 100v28', 'M20 200h40v-28', 'M188 178v46', 'M122 198h40', 'M20 232h32', 'M150 130h40'];
      return <g>
        <rect x="20" y="100" width="200" height="150" rx="10" {...s} />
        {walls.map((d, i) => <path key={i} d={d} {...s} />)}
        <path d="M38 120 C72 120 96 150 96 178 S150 232 202 232" stroke={C.orange} strokeWidth="3.5" strokeDasharray="2 8" fill="none" />
        <E x={38} y={126} ch="🐝" size={19} />
        <E x={202} y={238} ch="🌻" size={19} />
        <E x={120} y={272} ch="⭐" size={11} />
      </g>;
    }
    case 'letters': {
      const rows: [string, string[]][] = [['🍎', ['M', 'A', '?', 'Ã']], ['🐱', ['G', 'A', '?', 'O']],
        ['☀️', ['S', '?', 'L']], ['🏠', ['C', 'A', '?', 'A']]];
      return <g>
        {rows.map(([pic, letters], r) => <g key={r}>
          <E x={34} y={124 + r * 42} ch={pic} size={22} />
          {letters.map((l, i) => <Tile key={i} x={58 + i * 36} y={100 + r * 42} txt={l} fill={l === '?' ? C.sunSoft : C.muted} s={32} />)}
        </g>)}
        <g>
          <text x={20} y={274} fontSize="9.5" fontWeight="700" fill={C.soft}>Circule as vogais:</text>
          {['A', 'T', 'E', 'M', 'I', 'O'].map((l, i) => <g key={l}>
            <circle cx={122 + i * 18} cy={270} r="9" fill={i === 0 ? C.sunSoft : C.muted} />
            <text x={122 + i * 18} y={274} fontSize="11" fontWeight="800" textAnchor="middle" fill={C.ink}>{l}</text>
          </g>)}
        </g>
      </g>;
    }
    case 'numbers': {
      const boxes: [number, number, string, number][] = [[20, 102, '🍎', 4], [122, 102, '⭐', 6], [20, 176, '🐟', 3], [122, 176, '🎈', 5]];
      return <g>
        {boxes.map(([x, y, pic, n], b) => <g key={b}>
          <rect x={x} y={y} width="98" height="64" rx="10" fill={C.muted} opacity=".45" />
          {Array.from({ length: n }).map((_, i) => <E key={i} x={x + 14 + (i % 3) * 22} y={y + 26 + Math.floor(i / 3) * 20} ch={pic} size={16} />)}
          <Dash x={x + 64} y={y + 34} w={28} h={24} rx={7} />
          <text x={x + 78} y={y + 51} fontSize="14" fontWeight="800" textAnchor="middle" fill={C.soft}>?</text>
        </g>)}
        <text x={20} y={262} fontSize="9.5" fontWeight="700" fill={C.soft}>Complete a sequência:</text>
        {Array.from({ length: 8 }).map((_, i) => <g key={i}>
          <circle cx={26 + i * 24} cy={274} r="10" fill={i > 3 ? C.muted : C.sunSoft} />
          <text x={26 + i * 24} y={278} fontSize="11" fontWeight="800" textAnchor="middle" fill={C.ink}>{i > 3 ? '' : i + 1}</text>
        </g>)}
      </g>;
    }
    case 'dots': {
      const pts: [number, number][] = [[120, 104], [140, 128], [146, 158], [176, 196], [150, 196], [150, 226],
        [120, 240], [90, 226], [90, 196], [64, 196], [94, 158], [100, 128]];
      return <g>
        <path d={'M' + pts.map(p => p.join(' ')).join('L') + 'Z'} stroke={C.grape} strokeWidth="2.4" strokeDasharray="3 6" fill="none" />
        {pts.map(([x, y], i) => <g key={i}>
          <circle cx={x} cy={y} r="3.4" fill={C.ink} />
          <text x={x + (x > 120 ? 9 : x < 120 ? -9 : 0)} y={y - 6} fontSize="10" fontWeight="800" textAnchor="middle" fill={C.ink}>{i + 1}</text>
        </g>)}
        <E x={40} y={120} ch="⭐" size={13} />
        <E x={200} y={140} ch="✨" size={13} />
        <text x={120} y={266} fontSize="9.5" fontWeight="700" textAnchor="middle" fill={C.soft}>Que figura apareceu?</text>
        <Dash x={92} y={270} w={56} h={18} rx={9} col={C.grape} />
      </g>;
    }
    case 'match': {
      const left = ['🐶', '🐟', '🐦', '🐰', '🐢'];
      const right = ['🌳', '🏠', '🌊', '🪺', '🥕'];
      return <g>
        {left.map((a, i) => <g key={a}>
          <circle cx={44} cy={116 + i * 32} r="15" fill={C.muted} />
          <E x={44} y={122 + i * 32} ch={a} size={17} />
          <circle cx={196} cy={116 + i * 32} r="15" fill={C.muted} />
          <E x={196} y={122 + i * 32} ch={right[i] ?? ''} size={17} />
          <path d={`M60 ${116 + i * 32} C100 ${116 + i * 32} 130 ${116 + ((i + 2) % 5) * 32} 180 ${116 + ((i + 2) % 5) * 32}`}
            stroke={C.pink} strokeWidth="2.4" strokeDasharray="4 6" fill="none" />
        </g>)}
        <text x={120} y={288} fontSize="9.5" fontWeight="700" textAnchor="middle" fill={C.soft}>Cada bichinho tem uma casinha!</text>
      </g>;
    }
    case 'color': {
      const petals = Array.from({ length: 6 }).map((_, i) => {
        const a = (i * Math.PI) / 3;
        return { x: 120 + Math.cos(a) * 44, y: 168 + Math.sin(a) * 44, n: (i % 3) + 2, col: [C.sunSoft, C.pinkSoft, C.skySoft][i % 3] };
      });
      const legend: [string, string, number][] = [[C.sun, '1', 44], [C.pink, '2', 96], [C.sky, '3', 148], [C.leaf, '4', 200]];
      return <g>
        {petals.map((p, i) => <g key={i}>
          <ellipse cx={p.x} cy={p.y} rx="24" ry="18" transform={`rotate(${(i * 60)} ${p.x} ${p.y})`} fill={p.col} stroke={C.ink} strokeWidth="2.2" />
          <text x={p.x} y={p.y + 4} fontSize="12" fontWeight="800" textAnchor="middle" fill={C.ink}>{p.n}</text>
        </g>)}
        <circle cx="120" cy="168" r="22" fill={C.sunSoft} stroke={C.ink} strokeWidth="2.2" />
        <text x="120" y="173" fontSize="14" fontWeight="800" textAnchor="middle" fill={C.ink}>1</text>
        <path d="M120 192 v46" stroke={C.leaf} strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="142" cy="226" rx="16" ry="9" transform="rotate(-28 142 226)" fill={C.leafSoft} stroke={C.ink} strokeWidth="2.2" />
        <text x="142" y="230" fontSize="11" fontWeight="800" textAnchor="middle" fill={C.ink}>4</text>
        <text x="20" y="272" fontSize="9.5" fontWeight="700" fill={C.soft}>Legenda:</text>
        {legend.map(([col, n, x]) => <g key={n}>
          <circle cx={x} cy={268} r="9" fill={col} />
          <text x={x} y={272} fontSize="11" fontWeight="800" textAnchor="middle" fill={C.ink}>{n}</text>
        </g>)}
      </g>;
    }
    case 'trace': {
      const lanes = [
        'M28 0 q 14 -20 28 0 t 28 0 t 28 0 t 28 0 t 28 0',
        'M28 0 l 16 -18 l 16 18 l 16 -18 l 16 18 l 16 -18 l 16 18 l 16 -18 l 16 18',
        'M28 0 c 8 -26 26 -26 26 0 c 0 20 20 20 24 0 c 6 -26 24 -26 26 0 c 0 20 20 20 24 0',
        'M28 0 h 22 v -18 h 22 v 18 h 22 v -18 h 22 v 18 h 22',
        'M28 0 C 64 -26 96 26 128 0 S 176 -20 196 0',
      ];
      const cols = [C.sky, C.orange, C.pink, C.grape, C.leaf];
      return <g>
        {lanes.map((d, i) => <g key={i} transform={`translate(0 ${124 + i * 32})`}>
          <path d={d} stroke={cols[i]} strokeWidth="3.4" strokeDasharray="5 6" fill="none" strokeLinecap="round" />
          <circle cx="28" cy="0" r="4.5" fill={cols[i]} />
          <text x="206" y="5" fontSize="13" textAnchor="middle">⭐</text>
        </g>)}
        <text x="20" y="284" fontSize="9.5" fontWeight="700" fill={C.soft}>Comece pelo ponto e vá até a estrela.</text>
      </g>;
    }
    case 'shapes': {
      const row = (y: number, items: (string | null)[]) => (
        <g>{items.map((it, i) => {
          const cx = 44 + i * 38;
          if (it === null) return <g key={i}><Dash x={cx - 15} y={y - 15} w={30} h={30} rx={8} /><text x={cx} y={y + 7} fontSize="17" fontWeight="800" textAnchor="middle" fill={C.soft}>?</text></g>;
          if (it === 'c') return <circle key={i} cx={cx} cy={y} r="14" fill={C.pink} />;
          if (it === 't') return <polygon key={i} points={`${cx},${y - 15} ${cx + 15},${y + 12} ${cx - 15},${y + 12}`} fill={C.sun} />;
          if (it === 's') return <rect key={i} x={cx - 13} y={y - 13} width="26" height="26" rx="6" fill={C.sky} />;
          return <polygon key={i} points={`${cx},${y - 15} ${cx + 5},${y - 4} ${cx + 16},${y - 3} ${cx + 8},${y + 6} ${cx + 10},${y + 15} ${cx},${y + 10} ${cx - 10},${y + 15} ${cx - 8},${y + 6} ${cx - 16},${y - 3} ${cx - 5},${y - 4}`} fill={C.orange} />;
        })}</g>
      );
      return <g>
        <text x="20" y="108" fontSize="9.5" fontWeight="700" fill={C.soft}>1) Qual figura completa a fila?</text>
        {row(134, ['c', 't', 's', 'c', 't', null])}
        <text x="20" y="190" fontSize="9.5" fontWeight="700" fill={C.soft}>2) E nessa aqui?</text>
        {row(216, ['s', 's', 'c', 's', 's', null])}
        <text x="20" y="262" fontSize="9.5" fontWeight="700" fill={C.soft}>Pinte a resposta certa:</text>
        {(['c', 't', 's'] as const).map((it, i) => {
          const cx = 130 + i * 32;
          return <g key={i}>
            <circle cx={cx} cy={262} r="14" fill={C.muted} />
            {it === 'c' && <circle cx={cx} cy={262} r="8" fill={C.pink} />}
            {it === 't' && <polygon points={`${cx},${255} ${cx + 8},${268} ${cx - 8},${268}`} fill={C.sun} />}
            {it === 's' && <rect x={cx - 7} y={255} width="14" height="14" rx="4" fill={C.sky} />}
          </g>;
        })}
      </g>;
    }
    case 'wordsearch': {
      const grid = ['SOLARXQC', 'ABLUVEOA', 'TLHEOAKT', 'OPATRAFB', 'BOLAPMES', 'GATOLOLU', 'MACASARS'];
      const hits: [number, number, number][] = [[0, 0, 3], [4, 0, 4], [5, 0, 4], [6, 2, 4]];
      const cell = 20;
      return <g>
        {grid.map((rowStr, r) => rowStr.split('').map((ch, c) => {
          const on = hits.some(([hr, hc, len]) => r === hr && c >= hc && c < hc + len);
          return <g key={`${r}-${c}`}>
            <rect x={40 + c * cell} y={100 + r * cell} width={cell - 1.5} height={cell - 1.5} rx="4" fill={on ? C.sunSoft : C.muted} />
            <text x={40 + c * cell + cell / 2 - 1} y={100 + r * cell + 14} fontSize="11" fontWeight="800" textAnchor="middle" fill={C.ink}>{ch}</text>
          </g>;
        }))}
        <rect x="40" y="100" width="148" height="128" rx="9" fill="none" stroke={C.ink} strokeWidth="2" />
        <text x="120" y="248" fontSize="10" fontWeight="800" textAnchor="middle" fill={C.ink}>🌞 SOL   🐱 GATO   ⚽ BOLA   🏠 CASA</text>
        <text x="120" y="270" fontSize="9.5" fontWeight="700" textAnchor="middle" fill={C.soft}>Circule as palavras que você encontrou.</text>
      </g>;
    }
    case 'math': {
      const eqs: [string, string][] = [['3 + 2 =', C.sun], ['7 − 4 =', C.sky], ['4 + 4 =', C.leaf], ['9 − 5 =', C.pink], ['2 + 6 =', C.grape], ['5 + 3 =', C.orange]];
      return <g>
        {eqs.map(([eq, col], i) => {
          const x = i % 2 === 0 ? 24 : 128;
          const y = 122 + Math.floor(i / 2) * 48;
          return <g key={eq}>
            <text x={x} y={y} fontSize="18" fontWeight="800" fill={C.ink}>{eq}</text>
            <rect x={x + 62} y={y - 21} width="34" height="28" rx="8" fill={col} opacity=".28" />
            <Dash x={x + 62} y={y - 21} w={34} h={28} rx={8} col={col} />
          </g>;
        })}
        <text x="20" y="264" fontSize="9.5" fontWeight="700" fill={C.soft}>Pinte a caixa:</text>
        {[['5', C.sun, 92], ['3', C.sky, 136], ['8', C.leaf, 180]].map(([n, col, x]) => <g key={n as string}>
          <circle cx={x as number} cy={260} r="11" fill={col as string} />
          <text x={x as number} y={264} fontSize="11" fontWeight="800" textAnchor="middle" fill={C.ink}>{n as string}</text>
        </g>)}
      </g>;
    }
    case 'shadow': {
      const shapes = ['c', 's', 't', 'h'] as const;
      const order = [1, 3, 0, 2];
      const shape = (kind: string, cx: number, cy: number, fill: string, op = 1) => {
        if (kind === 'c') return <circle cx={cx} cy={cy} r="15" fill={fill} opacity={op} />;
        if (kind === 's') return <rect x={cx - 14} y={cy - 14} width="28" height="28" rx="7" fill={fill} opacity={op} />;
        if (kind === 't') return <polygon points={`${cx},${cy - 16} ${cx + 16},${cy + 13} ${cx - 16},${cy + 13}`} fill={fill} opacity={op} />;
        return <path d={`M${cx} ${cy + 13} C${cx - 22} ${cy - 3} ${cx - 12} ${cy - 18} ${cx} ${cy - 7} C${cx + 12} ${cy - 18} ${cx + 22} ${cy - 3} ${cx} ${cy + 13} Z`} fill={fill} opacity={op} />;
      };
      return <g>
        {shapes.map((sh, i) => {
          const o = order[i] ?? 0;
          const sil = shapes[o] ?? 'c';
          const col = [C.sun, C.sky, C.pink, C.grape][i] ?? C.sun;
          return <g key={i}>
            <rect x={22} y={104 + i * 40} width="44" height="34" rx="9" fill={C.muted} opacity=".5" />
            {shape(sh, 44, 121 + i * 40, col)}
            <rect x={174} y={104 + i * 40} width="44" height="34" rx="9" fill={C.muted} opacity=".5" />
            {shape(sil, 196, 121 + i * 40, C.ink, .8)}
            <path d={`M68 ${121 + i * 40} C110 ${121 + i * 40} 120 ${121 + o * 40} 172 ${121 + o * 40}`}
              stroke={C.pink} strokeWidth="2.4" strokeDasharray="4 6" fill="none" />
          </g>;
        })}
        <text x="120" y="278" fontSize="9.5" fontWeight="700" textAnchor="middle" fill={C.soft}>Algumas sombras se embaralharam!</text>
      </g>;
    }
    case 'draw': {
      return <g>
        <line x1="120" y1="102" x2="120" y2="250" stroke={C.line} strokeWidth="2" strokeDasharray="5 6" />
        <path d="M120 128 C88 108 56 128 62 158 C66 182 96 190 120 176" stroke={C.grape} strokeWidth="3.4" fill="none" />
        <path d="M120 176 C96 190 66 182 62 158" stroke={C.grape} strokeWidth="3.4" fill="none" />
        <path d="M120 176 L120 226" stroke={C.ink} strokeWidth="3.4" strokeLinecap="round" />
        <circle cx="100" cy="150" r="6" fill={C.sun} />
        <path d="M104 138 c-8 -10 -20 -8 -22 2" stroke={C.orange} strokeWidth="2.6" fill="none" />
        <path d="M120 128 C152 108 184 128 178 158 C174 182 144 190 120 176" stroke={C.soft} strokeWidth="2.6" strokeDasharray="4 7" fill="none" />
        <path d="M120 176 C144 190 174 182 178 158" stroke={C.soft} strokeWidth="2.6" strokeDasharray="4 7" fill="none" />
        <path d="M120 176 L120 226" stroke={C.soft} strokeWidth="2.6" strokeDasharray="4 7" />
        <circle cx="140" cy="150" r="6" fill="none" stroke={C.soft} strokeWidth="2.4" strokeDasharray="3 4" />
        <text x="120" y="266" fontSize="9.5" fontWeight="700" textAnchor="middle" fill={C.soft}>Complete a outra metade e pinte!</text>
        {[C.sun, C.orange, C.pink, C.sky, C.leaf, C.grape].map((col, i) => <circle key={i} cx={72 + i * 20} cy={280} r="7" fill={col} />)}
      </g>;
    }
  }
}

export function ActivitySheet({ kind, className = '', style }: { kind: SheetKind; className?: string; style?: CSSProperties }) {
  const m = meta[kind];
  return (
    <div className={`sheet overflow-hidden ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 240 320" className="h-full w-full" fontFamily="'Baloo 2', 'Nunito', sans-serif">
        <path d="M8 20 a12 12 0 0 1 12 -12 h200 a12 12 0 0 1 12 12 v34 h-224 z" fill={m.band} />
        <rect x="8" y="8" width="224" height="304" rx="12" fill="none" stroke={C.line} strokeWidth="1.6" strokeDasharray="6 5" />
        <E x={28} y={38} ch={m.icon} size={20} />
        <text x={50} y={30} fontSize="15" fontWeight="800" fill={C.ink}>{m.title}</text>
        <text x={50} y={43} fontSize="8.5" fontWeight="700" fill={C.soft}>Brincatividades</text>
        <rect x="170" y="22" width="54" height="17" rx="8.5" fill="var(--paper)" stroke={C.line} strokeWidth="1.4" />
        <text x="197" y="34" fontSize="8.5" fontWeight="800" textAnchor="middle" fill={C.soft}>{m.level.toUpperCase()}</text>

        <text x="16" y="66" fontSize="8" fontWeight="800" fill={C.soft}>NOME</text>
        <line x1="40" y1="68" x2="150" y2="68" stroke={C.line} strokeWidth="1.6" />
        <text x="158" y="66" fontSize="8" fontWeight="800" fill={C.soft}>DATA</text>
        <line x1="182" y1="68" x2="224" y2="68" stroke={C.line} strokeWidth="1.6" />

        <text x="16" y="86" fontSize="9.5" fontWeight="700" fill={C.ink}>✏️ {m.prompt}</text>

        <Art kind={kind} />

        <line x1="16" y1="292" x2="224" y2="292" stroke={C.line} strokeWidth="1.4" strokeDasharray="4 4" />
        <text x="16" y="306" fontSize="8" fontWeight="800" fill={C.soft}>⭐ Brincatividades</text>
        <text x="224" y="306" fontSize="8" fontWeight="800" textAnchor="end" fill={C.soft}>PÁG. {m.page}</text>
      </svg>
    </div>
  );
}
