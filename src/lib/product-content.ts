import { Brain, ScanEye, Route, Shapes, Pencil, Waypoints, Link2, Search, ALargeSmall, Hand, Calculator, Scissors, Puzzle, Target, Lightbulb, Eye, Sigma } from 'lucide-react';

export type Tone = 'sun' | 'tangerine' | 'sky' | 'leaf' | 'bubble' | 'grape';

export const toneStyles: Record<Tone, { soft: string; solid: string; text: string }> = {
  sun: { soft: 'bg-sun-soft', solid: 'bg-sun', text: 'text-foreground' },
  tangerine: { soft: 'bg-tangerine-soft', solid: 'bg-tangerine', text: 'text-tangerine' },
  sky: { soft: 'bg-sky-soft', solid: 'bg-sky', text: 'text-sky' },
  leaf: { soft: 'bg-leaf-soft', solid: 'bg-leaf', text: 'text-leaf' },
  bubble: { soft: 'bg-bubble-soft', solid: 'bg-bubble', text: 'text-bubble' },
  grape: { soft: 'bg-grape-soft', solid: 'bg-grape', text: 'text-grape' },
};

export const categories: { name: string; description: string; icon: typeof Brain; tone: Tone }[] = [
  { name: 'Alfabetização', description: 'Letras, sílabas e primeiras palavras.', icon: ALargeSmall, tone: 'bubble' },
  { name: 'Matemática', description: 'Números, quantidades e continhas.', icon: Calculator, tone: 'sky' },
  { name: 'Raciocínio lógico', description: 'Sequências, padrões e soluções.', icon: Shapes, tone: 'grape' },
  { name: 'Atenção', description: 'Observar detalhes e achar diferenças.', icon: ScanEye, tone: 'tangerine' },
  { name: 'Memória', description: 'Lembrar, reconhecer e conectar.', icon: Brain, tone: 'leaf' },
  { name: 'Coordenação motora', description: 'Traçar, contornar e movimentar.', icon: Pencil, tone: 'sun' },
  { name: 'Associação', description: 'Relacionar figuras e ideias.', icon: Link2, tone: 'bubble' },
  { name: 'Labirintos', description: 'Encontrar o caminho certo.', icon: Route, tone: 'sky' },
  { name: 'Ligue os pontos', description: 'Conectar números e revelar desenhos.', icon: Waypoints, tone: 'grape' },
  { name: 'Caça-palavras', description: 'Procurar palavras e ampliar o vocabulário.', icon: Search, tone: 'tangerine' },
  { name: 'Monta e recorta', description: 'Recortar, montar e criar.', icon: Scissors, tone: 'leaf' },
  { name: 'Mãos em dupla', description: 'Coordenação bilateral divertida.', icon: Hand, tone: 'sun' },
  { name: 'Raciocínio avançado', description: 'Sudoku de figuras e desafios de lógica.', icon: Puzzle, tone: 'bubble' },
];

export const skills: { emoji: string; name: string; icon: typeof Brain; tone: Tone }[] = [
  { emoji: '🧠', name: 'Raciocínio', icon: Brain, tone: 'grape' },
  { emoji: '🎯', name: 'Atenção', icon: Target, tone: 'tangerine' },
  { emoji: '✋', name: 'Coordenação motora', icon: Hand, tone: 'sun' },
  { emoji: '🔤', name: 'Alfabetização', icon: ALargeSmall, tone: 'bubble' },
  { emoji: '🔢', name: 'Matemática', icon: Sigma, tone: 'sky' },
  { emoji: '💡', name: 'Criatividade', icon: Lightbulb, tone: 'sun' },
  { emoji: '🧩', name: 'Resolução de problemas', icon: Puzzle, tone: 'leaf' },
  { emoji: '👀', name: 'Percepção visual', icon: Eye, tone: 'grape' },
];

export const audiences: { emoji: string; title: string; text: string; tone: Tone }[] = [
  { emoji: '👩‍🏫', title: 'Professoras', text: 'Atividades prontas para complementar suas aulas e economizar tempo.', tone: 'sky' },
  { emoji: '👩‍👧', title: 'Mães e pais', text: 'Opções divertidas para estimular o aprendizado das crianças em casa.', tone: 'bubble' },
  { emoji: '🧑‍🏫', title: 'Profissionais', text: 'Material para utilizar em atendimentos, reforço e atividades educativas.', tone: 'leaf' },
];

export const offerItems = ['442 páginas', '13 categorias', '3 níveis de dificuldade', 'PDF pronto para imprimir', 'Download imediato', 'Acesso vitalício'];

export const faqs = [
  { question: 'O material é digital?', answer: 'Sim. É um pacote digital em PDF. Nenhum material físico é enviado — você baixa e imprime as páginas que quiser.' },
  { question: 'Quantas páginas estão incluídas?', answer: 'São 442 páginas, organizadas em 13 categorias e três níveis de dificuldade: fácil, médio e difícil.' },
  { question: 'Como recebo o material?', answer: 'Por download, com acesso imediato após a confirmação do pagamento via Pix.' },
  { question: 'Posso imprimir quantas vezes quiser?', answer: 'Sim. Depois de baixar, você imprime as páginas sempre que precisar, para usar com suas crianças ou alunos.' },
  { question: 'O material serve para diferentes idades?', answer: 'Sim. As atividades atendem crianças de 3 a 12 anos, com níveis fácil, médio e difícil para escolher conforme cada criança.' },
  { question: 'Posso utilizar na escola?', answer: 'Sim. O material foi pensado para a sala de aula, para casa e para atendimentos de reforço e acompanhamento.' },
  { question: 'Como funciona a garantia?', answer: 'Você tem 7 dias após a compra para pedir o reembolso, caso o material não seja o que esperava.' },
];
