import { Brain, ScanEye, Route, Shapes, Pencil, Waypoints, Link2, Search, ALargeSmall, Hand, Calculator, Scissors, Puzzle } from 'lucide-react';

export const categories = [
  { name: 'Atenção', description: 'Observar detalhes e encontrar diferenças.', group: 'Pensar e descobrir', icon: ScanEye, tone: 'mint' },
  { name: 'Memória', description: 'Reconhecer, lembrar e fazer conexões.', group: 'Pensar e descobrir', icon: Brain, tone: 'sky' },
  { name: 'Labirintos', description: 'Encontrar caminhos, um desafio por vez.', group: 'Pensar e descobrir', icon: Route, tone: 'sunshine' },
  { name: 'Raciocínio lógico', description: 'Explorar sequências, padrões e soluções.', group: 'Pensar e descobrir', icon: Shapes, tone: 'coral' },
  { name: 'Coordenação motora', description: 'Traçar, contornar e desenvolver movimentos.', group: 'Criar e movimentar', icon: Pencil, tone: 'sky' },
  { name: 'Ligue os pontos', description: 'Conectar os números e revelar desenhos.', group: 'Criar e movimentar', icon: Waypoints, tone: 'mint' },
  { name: 'Associação', description: 'Relacionar figuras, ideias e possibilidades.', group: 'Pensar e descobrir', icon: Link2, tone: 'coral' },
  { name: 'Caça-palavras', description: 'Procurar palavras e ampliar o vocabulário.', group: 'Letras e números', icon: Search, tone: 'sunshine' },
  { name: 'Alfabetização', description: 'Descobrir letras e dar os primeiros passos na escrita.', group: 'Letras e números', icon: ALargeSmall, tone: 'mint' },
  { name: 'Mãos em dupla', description: 'Trabalhar a coordenação bilateral de forma divertida.', group: 'Criar e movimentar', icon: Hand, tone: 'sunshine' },
  { name: 'Matemática', description: 'Brincar com números, quantidades e operações.', group: 'Letras e números', icon: Calculator, tone: 'sky' },
  { name: 'Monta e recorta', description: 'Recortar peças, montar e criar novas formas.', group: 'Criar e movimentar', icon: Scissors, tone: 'coral' },
  { name: 'Raciocínio avançado', description: 'Sudoku de figuras, tabelas e desafios de lógica.', group: 'Pensar e descobrir', icon: Puzzle, tone: 'mint' },
] as const;

export const categoryGroups = ['Todas as categorias', 'Pensar e descobrir', 'Letras e números', 'Criar e movimentar'] as const;

export const faqs = [
  { question: 'Para qual idade são as atividades?', answer: 'O pacote é destinado a crianças de 3 a 12 anos. As atividades estão organizadas nos níveis fácil, médio e difícil para você escolher conforme a habilidade e o momento de cada criança.' },
  { question: 'Vou receber um material físico em casa?', answer: 'Não. Este é um produto digital em PDF. Você faz o download e imprime as páginas que quiser, na escola ou em casa. A impressão não está incluída no valor.' },
  { question: 'Como recebo o pacote depois da compra?', answer: 'A entrega é por download, com acesso imediato após a confirmação do pagamento. O acesso é vitalício, sem mensalidade.' },
  { question: 'Posso usar na escola e em casa?', answer: 'Sim. O material foi pensado para a rotina de professoras da educação infantil e do fundamental I, mães, psicopedagogas e psicólogas infantis, em contextos de aprendizagem na escola e em casa.' },
  { question: 'As atividades têm gabarito?', answer: 'Sim. O pacote inclui gabaritos nas atividades que precisam de respostas para conferência.' },
  { question: 'Como funciona a garantia de 7 dias?', answer: 'Você tem 7 dias após a compra para solicitar o reembolso caso o material não seja o que esperava.' },
];