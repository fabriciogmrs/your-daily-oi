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

export const offerItems = [
  '442 atividades prontas para imprimir',
  '13 categorias organizadas por habilidade',
  '3 níveis de dificuldade: fácil, médio e difícil',
  'Gabaritos inclusos para conferir as respostas',
  'Para crianças de 3 a 12 anos',
  'Imprima quantas vezes quiser, para quantas turmas quiser',
  'Acesso vitalício, sem mensalidade',
  'Atualizações futuras gratuitas',
];

export const bonuses: { title: string; text: string; value: string; tone: Tone }[] = [
  { title: 'Pacote Matemática', text: '45 atividades de contagem, sequência, soma, subtração e pintar pelo resultado.', value: 'R$27', tone: 'sky' },
  { title: 'Jogos de Recortar', text: '30 atividades manipulativas: jogo da memória com verso, mosaico espelhado, colmeia da memória e tabuleiro de ligações.', value: 'R$17', tone: 'leaf' },
  { title: 'Caça-palavras com Gabarito', text: '30 caça-palavras em 10 temas e 3 níveis, com todas as respostas prontas para conferir.', value: 'R$17', tone: 'bubble' },
];

export const faqs = [
  { question: 'O material é digital?', answer: 'Sim. É um pacote digital em PDF. Nenhum material físico é enviado — você baixa e imprime as páginas que quiser.' },
  { question: 'Quantas páginas estão incluídas?', answer: 'São 442 páginas, organizadas em 13 categorias e três níveis de dificuldade: fácil, médio e difícil.' },
  { question: 'Como recebo o material?', answer: 'Por download, com acesso imediato após a confirmação do pagamento via Pix.' },
  { question: 'Posso imprimir quantas vezes quiser?', answer: 'Sim. Depois de baixar, você imprime as páginas sempre que precisar, para usar com suas crianças ou alunos.' },
  { question: 'O material serve para diferentes idades?', answer: 'Sim. As atividades atendem crianças de 3 a 12 anos, com níveis fácil, médio e difícil para escolher conforme cada criança.' },
  { question: 'Posso utilizar na escola?', answer: 'Sim. O material foi pensado para a sala de aula, para casa e para atendimentos de reforço e acompanhamento.' },
  { question: 'Como funciona a garantia?', answer: 'Você tem 7 dias após a compra para pedir o reembolso, caso o material não seja o que esperava.' },
];

export const testimonials: { quote: string; name: string; role: string; emoji: string; tone: Tone }[] = [
  { quote: 'Minha filha adorou as atividades! Agora a gente passa um tempinho fazendo as tarefinhas juntas. Gostei muito da variedade, valeu a pena 😊', name: 'Bruna', role: 'Mãe de uma criança', emoji: '👩‍👧', tone: 'bubble' },
  { quote: 'Gostei bastante! Tem muitas opções de atividades e isso ajuda muito na hora de preparar algo diferente para as crianças. Material bem variado!', name: 'Benjamin', role: 'Professor e pai', emoji: '👨‍🏫', tone: 'sky' },
  { quote: 'Acho muito importante incentivar o aprendizado através das brincadeiras. Gostei da proposta de reunir tantas atividades em um só material, facilita bastante para as famílias.', name: 'Rafaela', role: 'Psicóloga infantil', emoji: '🧑‍🏫', tone: 'leaf' },
];


export const levels: { name: string; ages: string; text: string; example: string; tone: Tone }[] = [
  { name: 'Fácil', ages: '3 a 5 anos', text: 'Primeiro contato com traços, formas e cores.', example: 'Tracejado, colorir e ligar pontos', tone: 'leaf' },
  { name: 'Médio', ages: '6 a 8 anos', text: 'Para quem já escreve, conta e segue instruções.', example: 'Labirintos, continhas e associação', tone: 'sky' },
  { name: 'Difícil', ages: '9 a 12 anos', text: 'Desafios de lógica, atenção e raciocínio.', example: 'Caça-palavras, sombras e sudoku de figuras', tone: 'grape' },
];
