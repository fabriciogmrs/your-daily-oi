import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, BookOpen, Check, CheckCheck, ChevronDown, Download, FileText, Heart, Infinity as InfinityIcon, Menu, Printer, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { categories, categoryGroups, faqs } from '@/lib/product-content';
import bundleImage from '@/assets/activity-bundle-br.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Atividades Infantis — 442 páginas para imprimir | R$27' },
    { name: 'description', content: '442 páginas de atividades infantis em PDF para crianças de 3 a 12 anos. 13 categorias, 3 níveis, acesso vitalício e garantia de 7 dias. R$27 no Pix.' },
    { property: 'og:title', content: 'Atividades Infantis — Escolha, imprima e aplique.' },
    { property: 'og:description', content: 'Um pacote brasileiro com 442 páginas, 13 categorias e três níveis. Para aprender na escola e em casa. R$27 no Pix.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const toneClasses = {
  mint: 'bg-mint text-primary', sky: 'bg-sky text-foreground',
  sunshine: 'bg-sunshine/25 text-foreground', coral: 'bg-coral/10 text-coral',
};

function Index() {
  const [filter, setFilter] = useState<string>('Todas as categorias');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const scrollToOffer = () => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });

  return <>
    <div className="bg-primary px-4 py-2.5 text-center text-xs font-medium text-primary-foreground sm:text-sm">
      Um mundo de descobertas, por <strong>R$27</strong> <span className="mx-2 opacity-40">|</span> Pagamento único. Aprendizado sem limites.
    </div>
    <header className="relative z-20 border-b border-border/60 bg-background">
      <div className="page-width flex h-20 items-center justify-between gap-5">
        <a href="#" className="flex items-center gap-2.5" aria-label="Atividades Infantis, início">
          <span className="flex size-10 items-center justify-center rounded-lg bg-mint text-primary"><BookOpen size={24} strokeWidth={1.8} /></span>
          <span className="font-heading text-lg font-extrabold leading-tight">atividades<span className="block text-primary">infantis<span className="text-coral">.</span></span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Navegação principal">
          <a className="transition-colors hover:text-primary" href="#categorias">O que vem no pacote</a>
          <a className="transition-colors hover:text-primary" href="#como-funciona">Como funciona</a>
          <a className="transition-colors hover:text-primary" href="#duvidas">Dúvidas</a>
        </nav>
        <Button className="hidden h-10 px-5 font-bold sm:inline-flex" onClick={scrollToOffer}>Quero meu pacote <ArrowRight /></Button>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav className="absolute left-0 right-0 flex flex-col gap-5 border-b bg-background p-6 text-sm shadow-sm" aria-label="Navegação móvel">{[['O que vem no pacote', '#categorias'], ['Como funciona', '#como-funciona'], ['Dúvidas', '#duvidas']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
    </header>

    <main>
      <section className="hero">
        <img className="hero-photo" src={bundleImage} alt="Representação ilustrativa de folhas de atividades com labirinto, letras, números e coordenação motora" width={1536} height={1024} fetchPriority="high" />
        <div className="page-width">
          <div className="hero-copy reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-mint/80 px-3 py-1.5 text-xs font-semibold text-primary"><Sparkles size={14} /> Pequenas atividades. Grandes descobertas.</div>
            <h1 className="hero-title">Atividades infantis<br />para <span className="highlight">aprender</span><br /><span className="highlight">brincando.</span></h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground"><strong className="font-semibold text-foreground">Pare de montar atividade em cima da hora.</strong><br />442 páginas prontinhas para você escolher, imprimir e aplicar — na escola ou em casa.</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium"><span className="flex items-center gap-1.5"><Check size={15} className="text-primary" /> De 3 a 12 anos</span><span className="flex items-center gap-1.5"><Check size={15} className="text-primary" /> 13 categorias</span><span className="flex items-center gap-1.5"><Check size={15} className="text-primary" /> 3 níveis</span></div>
            <Button onClick={scrollToOffer} className="mt-7 h-13 w-full max-w-sm gap-4 text-base font-bold">Quero as atividades por R$27 <ArrowRight size={19} /></Button>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck size={14} /> Compra única <span className="opacity-40">•</span> Acesso vitalício <span className="opacity-40">•</span> Garantia de 7 dias</div>
          </div>
        </div>
        <div className="hero-sticker"><span className="font-heading text-4xl font-black">442</span><span className="text-xs font-bold">páginas de</span><span className="text-xs font-bold">descobertas!</span></div>
        <span className="absolute bottom-3 right-5 text-[10px] text-muted-foreground">Imagem ilustrativa do material</span>
      </section>

      <section className="border-y border-border/70 bg-muted py-6" aria-label="Vantagens do pacote">
        <div className="page-width grid grid-cols-2 gap-6 md:grid-cols-4">{[
          { icon: Download, title: 'Download imediato', text: 'Receba em PDF e comece hoje' },
          { icon: Printer, title: 'Pronto para imprimir', text: 'Escolha só o que precisa' },
          { icon: InfinityIcon, title: 'Seu para sempre', text: 'Sem mensalidade, sem prazo' },
          { icon: Heart, title: 'Feito para o Brasil', text: 'Na escola e na sua casa' },
        ].map(({ icon: Icon, title, text }) => <div key={title} className="flex items-center gap-3"><Icon className="shrink-0 text-primary" size={24} strokeWidth={1.6} /><div><h2 className="text-sm font-extrabold">{title}</h2><p className="mt-0.5 text-xs text-muted-foreground">{text}</p></div></div>)}</div>
      </section>

      <section id="categorias" className="py-18 sm:py-22">
        <div className="page-width">
          <div className="text-center"><p className="section-kicker">Um pacote. Muitas possibilidades.</p><h2 className="section-title mt-3">Uma atividade para cada descoberta.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">13 categorias organizadas por habilidade. Menos tempo procurando,<br className="hidden sm:block" /> mais tempo acompanhando o aprendizado.</p></div>
          <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrar categorias">{categoryGroups.map(group => <Button key={group} size="sm" variant={filter === group ? 'default' : 'ghost'} className="h-9 px-4 text-xs" aria-pressed={filter === group} onClick={() => setFilter(group)}>{group}</Button>)}</div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.filter(category => filter === 'Todas as categorias' || category.group === filter).map(({ name, description, icon: Icon, tone }, index) => <article key={name} className="category-card rounded-lg border border-border/70 bg-card p-5"><div className="flex items-start justify-between"><span className={`flex size-11 items-center justify-center rounded-lg ${toneClasses[tone]}`}><Icon size={23} strokeWidth={1.7} /></span><span className="text-xs text-muted-foreground/60">{String(categories.findIndex(c => c.name === name) + 1).padStart(2, '0')}</span></div><h3 className="mt-4 text-base font-extrabold">{name}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p></article>)}</div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-muted-foreground"><span className="flex items-center gap-2"><CheckCheck size={16} className="text-primary" /> Gabaritos nas atividades que precisam</span><span className="flex items-center gap-2"><FileText size={16} className="text-primary" /> 442 páginas em PDF</span></div>
        </div>
      </section>

      <section id="como-funciona" className="bg-secondary py-16 sm:py-20">
        <div className="page-width">
          <div className="text-center"><p className="section-kicker">Sua rotina mais leve</p><h2 className="section-title mt-3">Escolha. Imprima. Aplique.</h2><p className="mt-4 text-sm text-muted-foreground">O planejamento fica mais simples. A descoberta fica com eles.</p></div>
          <div className="mt-12 grid gap-9 sm:grid-cols-3">{[
            { number: '01', icon: BookOpen, title: 'Escolha a atividade', text: 'Encontre a habilidade que quer trabalhar e o nível adequado para a criança.' },
            { number: '02', icon: Printer, title: 'Imprima as páginas', text: 'Abra o PDF e imprima o que vai usar. O restante fica guardado para a próxima vez.' },
            { number: '03', icon: Sparkles, title: 'Deixe a descoberta acontecer', text: 'Aplique na sala de aula ou em casa, respeitando o ritmo de cada criança.' },
          ].map(({ number, icon: Icon, title, text }) => <div key={number} className="relative text-center"><span className="mx-auto flex size-14 items-center justify-center rounded-full bg-background text-primary"><Icon size={26} strokeWidth={1.6} /></span><p className="mt-5 text-xs font-bold text-primary">PASSO {number}</p><h3 className="mt-2 text-lg font-extrabold">{title}</h3><p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 border-t border-primary/10 pt-7"><span className="mr-2 text-sm font-semibold">Para diferentes momentos:</span><span className="rounded-full bg-background px-4 py-2 text-xs font-medium">Fácil</span><span className="rounded-full bg-background px-4 py-2 text-xs font-medium">Médio</span><span className="rounded-full bg-background px-4 py-2 text-xs font-medium">Difícil</span></div>
        </div>
      </section>

      <section id="oferta" className="py-18 sm:py-22">
        <div className="page-width grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div><p className="section-kicker">Mais de 440 motivos para começar</p><h2 className="section-title mt-3">Menos correria.<br />Mais tempo para ensinar.</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Um material brasileiro para quem cuida do aprendizado todos os dias. Da primeira letra aos desafios de lógica, tenha uma atividade à mão.</p><ul className="mt-7 space-y-4">{['442 páginas para imprimir e aplicar', '13 categorias organizadas por habilidade', 'Níveis fácil, médio e difícil', 'Gabaritos nas atividades que precisam', 'Download imediato e acesso vitalício'].map(text => <li key={text} className="flex items-center gap-3 text-sm"><span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-mint text-primary"><Check size={12} strokeWidth={3} /></span>{text}</li>)}</ul><div className="mt-8 flex items-center gap-3 border-t pt-6"><ShieldCheck size={33} className="shrink-0 text-primary" strokeWidth={1.6} /><div><p className="font-heading text-base font-extrabold">7 dias para decidir com tranquilidade.</p><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Se não for o que esperava, solicite seu dinheiro de volta.</p></div></div></div>
          <div className="rounded-lg border-2 border-primary bg-background p-7 text-center sm:p-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1.5 text-xs font-semibold text-primary"><Zap size={13} /> Pacote completo • Acesso vitalício</span>
            <h3 className="mt-5 text-2xl font-extrabold">Atividades Infantis</h3><p className="mt-2 text-sm text-muted-foreground">Tudo pronto para a próxima descoberta.</p>
            <p className="mt-7 text-sm text-muted-foreground">Pagamento único de</p><p className="offer-price mt-2"><span className="mr-1 align-top text-2xl leading-loose">R$</span>27<span className="text-3xl">,00</span></p><p className="mt-3 text-xs font-medium text-muted-foreground">À vista no Pix. Sem assinatura. Sem mensalidade.</p>
            <Button onClick={() => setCheckoutOpen(true)} className="mt-8 h-13 w-full gap-3 whitespace-normal text-base font-bold">Quero meu pacote completo <ArrowRight /></Button>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground"><ShieldCheck size={14} /> Garantia de 7 dias</p>
            <div className="mt-6 border-t pt-5 text-xs text-muted-foreground">PDF digital <span className="mx-2">•</span> Sem envio físico <span className="mx-2">•</span> De 3 a 12 anos</div>
          </div>
        </div>
      </section>

      <section id="duvidas" className="border-t bg-muted py-16 sm:py-20"><div className="page-width max-w-3xl"><div className="text-center"><p className="section-kicker">Tudo às claras</p><h2 className="section-title mt-3">Ficou alguma dúvida?</h2></div><div className="mt-9">{faqs.map(({ question, answer }, index) => <div key={question} className="border-b"><Button variant="ghost" className="h-auto w-full justify-between gap-4 whitespace-normal rounded-none px-0 py-5 text-left text-sm font-semibold hover:bg-transparent hover:text-primary" aria-expanded={openFaq === index} aria-controls={`faq-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}<ChevronDown className={`shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} /></Button>{openFaq === index && <p id={`faq-${index}`} className="pb-5 pr-5 text-sm leading-relaxed text-muted-foreground">{answer}</p>}</div>)}</div></div></section>
    </main>
    <footer className="border-t py-8"><div className="page-width flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left"><div><p className="font-heading text-base font-extrabold">atividades infantis<span className="text-coral">.</span></p><p className="mt-1 text-xs text-muted-foreground">Pequenas atividades. Grandes descobertas.</p></div><p className="max-w-sm text-xs leading-relaxed text-muted-foreground">Material digital para fins educativos. As atividades não substituem acompanhamento profissional.</p></div></footer>

    <Dialog.Root open={checkoutOpen} onOpenChange={setCheckoutOpen}>
      <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-40 bg-foreground/35" /><Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-40px)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-8 shadow-xl"><Dialog.Title className="font-heading text-2xl font-extrabold">As compras ainda não estão abertas</Dialog.Title><Dialog.Description className="mt-4 text-sm leading-relaxed text-muted-foreground">O pagamento e o download deste pacote ainda não estão disponíveis nesta página. Nenhuma cobrança será feita.</Dialog.Description><p className="mt-5 text-sm font-semibold">Pacote completo: R$27 no Pix</p><Dialog.Close asChild><Button className="mt-6 w-full">Entendi</Button></Dialog.Close><Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Fechar" className="absolute right-2 top-2"><X /></Button></Dialog.Close></Dialog.Content></Dialog.Portal>
    </Dialog.Root>
  </>;
}
