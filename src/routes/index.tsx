import { createFileRoute } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';
import { ArrowRight, Check, ChevronDown, Download, FileText, Infinity as InfinityIcon, Printer, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { audiences, categories, faqs, offerItems, skills, toneStyles } from '@/lib/product-content';
import { ActivitySheet, type SheetKind } from '@/components/kids/ActivitySheet';
import { Cloud, Dot, Pencil, Squiggle, Star, useReveal } from '@/components/kids/Decor';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: '442 páginas de atividades infantis para imprimir | R$27' },
    { name: 'description', content: 'Pacote com 442 páginas de atividades infantis em PDF para crianças de 3 a 12 anos. 13 categorias, 3 níveis, acesso vitalício e garantia de 7 dias. R$27 no Pix.' },
    { property: 'og:title', content: '442 páginas de atividades para aprender brincando' },
    { property: 'og:description', content: 'Atividades prontas para imprimir e usar em casa ou na escola. 13 categorias, 3 níveis. R$27 no Pix.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function CtaButton({ children, onClick, className = '' }: { children: ReactNode; onClick: () => void; className?: string }) {
  return <Button onClick={onClick} className={`cta-button h-auto rounded-full px-8 py-5 font-heading text-lg font-extrabold tracking-wide sm:text-xl ${className}`}>{children} <ArrowRight className="size-6" /></Button>;
}

function SectionHead({ kicker, title, tone, children }: { kicker: string; title: ReactNode; tone: keyof typeof toneStyles; children?: ReactNode }) {
  return <div className="reveal mx-auto max-w-2xl text-center">
    <span className={`kicker ${toneStyles[tone].soft} ${toneStyles[tone].text}`}><Sparkles size={14} /> {kicker}</span>
    <h2 className="section-title mt-4">{title}</h2>
    {children && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p>}
  </div>;
}

const gallery: { kind: SheetKind; rot: number }[] = [
  { kind: 'maze', rot: -4 }, { kind: 'letters', rot: 3 }, { kind: 'numbers', rot: -2 }, { kind: 'dots', rot: 4 },
  { kind: 'match', rot: -3 }, { kind: 'color', rot: 2 }, { kind: 'trace', rot: -4 }, { kind: 'shapes', rot: 3 },
];

function Index() {
  useReveal();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const buy = () => setCheckoutOpen(true);

  return <>
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="page-width flex h-18 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2" aria-label="Aprender Brincando, início">
          <span className="blob flex size-11 items-center justify-center bg-sun font-heading text-xl font-extrabold">A</span>
          <span className="font-heading text-xl font-extrabold leading-none">aprender<span className="text-bubble">brincando</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-bold md:flex" aria-label="Navegação principal">
          <a className="hover:text-primary" href="#pacote">O pacote</a>
          <a className="hover:text-primary" href="#exemplos">Exemplos</a>
          <a className="hover:text-primary" href="#duvidas">Dúvidas</a>
        </nav>
        <Button onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-full px-5 font-extrabold">R$27</Button>
      </div>
    </header>

    <main>
      {/* HERO */}
      <section className="dotgrid relative overflow-hidden pb-20 pt-12 sm:pt-16 lg:pb-28">
        <Cloud className="float-slow absolute -left-6 top-10 w-32 text-sky-soft" />
        <Star className="float absolute left-[46%] top-8 w-9 text-sun" />
        <Squiggle className="absolute bottom-10 left-6 w-24 text-leaf" />
        <Dot className="float absolute right-8 top-24 size-5 bg-bubble" />
        <div className="page-width grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div className="reveal in relative z-10 text-center lg:text-left">
            <span className="kicker bg-grape-soft text-grape"><Sparkles size={14} /> Pacote completo de atividades infantis</span>
            <h1 className="mt-6 text-[44px] font-extrabold sm:text-6xl lg:text-[68px]">
              <span className="text-tangerine">442 páginas</span> de atividades para <span className="relative inline-block">aprender<Squiggle className="absolute -bottom-3 left-0 w-full text-sun" /></span> brincando.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">Tenha atividades prontas para imprimir e usar em casa ou na escola, organizadas para desenvolver diferentes habilidades das crianças.</p>
            <div className="mx-auto mt-7 grid max-w-md grid-cols-3 gap-3 lg:mx-0">
              {[['442', 'páginas', 'tangerine'], ['13', 'categorias', 'sky'], ['3', 'níveis', 'leaf']].map(([n, l, t]) =>
                <div key={l} className={`wiggle rounded-2xl ${toneStyles[t as 'sky'].soft} px-3 py-3 text-center`}>
                  <div className={`font-heading text-3xl font-extrabold leading-none sm:text-4xl ${toneStyles[t as 'sky'].text}`}>{n}</div>
                  <div className="mt-1 text-xs font-black uppercase tracking-wider">{l}</div>
                </div>)}
            </div>
            <CtaButton onClick={buy} className="mt-8 w-full sm:w-auto">Quero meu pacote por R$27</CtaButton>
            <ul className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-x-4 gap-y-2 text-sm font-bold lg:mx-0">
              {['Download imediato', 'Arquivo PDF', 'Acesso vitalício', 'Pronto para imprimir'].map(t => <li key={t} className="flex items-center gap-2"><span className="flex size-5 items-center justify-center rounded-full bg-leaf text-primary-foreground"><Check size={13} strokeWidth={4} /></span>{t}</li>)}
            </ul>
          </div>

          {/* Mockup */}
          <div className="relative mx-auto h-[400px] w-full max-w-[460px] sm:h-[480px]">
            <div className="blob absolute inset-4 bg-sun-soft" />
            <div className="blob absolute bottom-0 right-0 size-40 bg-bubble-soft" />
            <ActivitySheet kind="color" className="absolute left-[4%] top-[12%] h-[62%] w-[52%]" style={{ transform: 'rotate(-10deg)' }} />
            <ActivitySheet kind="maze" className="absolute right-[2%] top-[4%] h-[62%] w-[52%]" style={{ transform: 'rotate(8deg)' }} />
            <ActivitySheet kind="letters" className="absolute bottom-[3%] left-[22%] h-[62%] w-[54%]" style={{ transform: 'rotate(-2deg)' }} />
            <div className="float absolute -left-1 bottom-10 z-10 flex size-24 rotate-[-8deg] flex-col items-center justify-center rounded-full border-4 border-card bg-tangerine text-primary-foreground shadow-lg">
              <span className="font-heading text-3xl font-extrabold leading-none">PDF</span><span className="text-[10px] font-black uppercase">pra imprimir</span>
            </div>
            <Pencil className="float-slow absolute -right-2 bottom-16 z-10 w-16" />
            <Star className="float absolute right-10 top-0 z-10 w-10 text-bubble" />
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section id="pacote" className="relative bg-sky-soft py-20 sm:py-28">
        <Star className="float absolute right-[8%] top-12 w-8 text-sun" />
        <div className="page-width">
          <SectionHead kicker="O que você recebe" title={<>Um pacote completo para deixar as atividades <span className="text-sky">muito mais divertidas.</span></>} tone="sky">13 categorias organizadas por habilidade, em níveis fácil, médio e difícil.</SectionHead>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {categories.map(({ name, description, icon: Icon, tone }, i) => <article key={name} className="reveal soft-card group p-5 sm:p-6" style={{ transitionDelay: `${(i % 4) * 70}ms` }}>
              <span className={`blob wiggle flex size-14 items-center justify-center ${toneStyles[tone].solid} text-primary-foreground`}><Icon size={28} strokeWidth={2.2} /></span>
              <h3 className="mt-4 text-xl font-extrabold">{name}</h3>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">{description}</p>
            </article>)}
            <article className="reveal flex flex-col justify-center rounded-[28px] bg-tangerine p-6 text-primary-foreground">
              <span className="font-heading text-5xl font-extrabold leading-none">442</span>
              <span className="mt-1 font-bold">páginas com gabaritos nas atividades que precisam</span>
            </article>
          </div>
        </div>
      </section>

      {/* EXEMPLOS */}
      <section id="exemplos" className="relative overflow-hidden py-20 sm:py-28">
        <Cloud className="float-slow absolute right-[-30px] top-16 w-40 text-bubble-soft" />
        <div className="page-width">
          <SectionHead kicker="Espie por dentro" title={<>Exemplos das <span className="text-bubble">atividades</span></>} tone="bubble">Páginas coloridas, claras e prontas para a criança pegar o lápis e começar.</SectionHead>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4">
            {gallery.map(({ kind, rot }, i) => <div key={kind} className="reveal" style={{ transitionDelay: `${(i % 4) * 80}ms` }}>
              <ActivitySheet kind={kind} className="sheet-tilt aspect-[3/4] w-full" style={{ transform: `rotate(${rot}deg)` }} />
            </div>)}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">Ilustrações representativas do estilo das atividades.</p>
        </div>
      </section>

      {/* DESENVOLVIMENTO */}
      <section className="relative bg-leaf-soft py-20 sm:py-28">
        <Squiggle className="absolute left-[6%] top-14 w-20 text-grape" />
        <div className="page-width">
          <SectionHead kicker="Desenvolvimento" title={<>Muito mais do que <span className="text-leaf">uma brincadeira.</span></>} tone="leaf">Cada página estimula uma habilidade importante para crescer aprendendo.</SectionHead>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {skills.map(({ emoji, name, tone }, i) => <div key={name} className="reveal soft-card flex flex-col items-center p-6 text-center" style={{ transitionDelay: `${(i % 4) * 70}ms` }}>
              <span className={`blob wiggle flex size-20 items-center justify-center text-4xl ${toneStyles[tone].soft}`}>{emoji}</span>
              <h3 className="mt-4 text-lg font-extrabold leading-tight">{name}</h3>
            </div>)}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20 sm:py-28">
        <div className="page-width">
          <SectionHead kicker="Para quem é" title={<>Feito para quem <span className="text-grape">ensina com carinho.</span></>} tone="grape" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audiences.map(({ emoji, title, text, tone }, i) => <article key={title} className={`reveal soft-card relative overflow-hidden p-8 ${toneStyles[tone].soft}`} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className={`blob absolute -right-8 -top-8 size-32 ${toneStyles[tone].solid} opacity-25`} />
              <span className="relative flex size-20 items-center justify-center rounded-3xl bg-card text-5xl shadow-sm">{emoji}</span>
              <h3 className="relative mt-6 text-3xl font-extrabold">{title}</h3>
              <p className="relative mt-3 text-lg leading-relaxed text-muted-foreground">{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="relative overflow-hidden bg-grape py-20 sm:py-28">
        <Star className="float absolute left-[8%] top-12 w-12 text-sun" />
        <Star className="float-slow absolute bottom-16 right-[10%] w-9 text-bubble" />
        <Cloud className="absolute -left-10 bottom-8 w-44 text-grape-soft opacity-20" />
        <div className="page-width">
          <div className="reveal relative mx-auto max-w-3xl rounded-[40px] bg-card p-7 shadow-2xl sm:p-12">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 rotate-[-3deg] whitespace-nowrap rounded-full bg-sun px-6 py-2 font-heading text-lg font-extrabold shadow-md">Oferta especial ✨</span>
            <h2 className="section-title text-center">Leve o pacote completo hoje</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <ul className="grid gap-3">
                {offerItems.map((item, i) => { const icons = [FileText, Sparkles, Zap, Printer, Download, InfinityIcon]; const Icon = icons[i]; const tones = ['tangerine', 'sky', 'leaf', 'bubble', 'grape', 'sun'] as const;
                  return <li key={item} className="flex items-center gap-3 text-lg font-bold"><span className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${toneStyles[tones[i]].soft} ${toneStyles[tones[i]].text}`}><Icon size={19} strokeWidth={2.4} /></span>{item}</li>; })}
              </ul>
              <div className="rounded-[32px] bg-sun-soft px-8 py-8 text-center">
                <p className="text-sm font-black uppercase tracking-wider text-muted-foreground">Tudo isso por</p>
                <p className="font-heading text-8xl font-extrabold leading-none text-tangerine"><span className="align-top text-3xl">R$</span>27</p>
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-leaf px-4 py-1 text-sm font-extrabold text-primary-foreground">Pagamento via Pix</p>
                <p className="mt-2 text-xs font-bold text-muted-foreground">Pagamento único, sem mensalidade</p>
              </div>
            </div>
            <CtaButton onClick={buy} className="mt-10 w-full">Quero garantir meu pacote</CtaButton>
            <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-leaf-soft p-4">
              <ShieldCheck className="size-10 shrink-0 text-leaf" />
              <p className="text-sm"><strong className="font-heading text-lg">🛡️ Garantia de 7 dias.</strong> Se não for o que esperava, você pede o reembolso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="py-20 sm:py-28">
        <div className="page-width max-w-3xl">
          <SectionHead kicker="Perguntas frequentes" title={<>Ficou alguma <span className="text-tangerine">dúvida?</span></>} tone="tangerine" />
          <div className="mt-12 grid gap-3">
            {faqs.map(({ question, answer }, i) => { const open = openFaq === i; return <div key={question} className={`overflow-hidden rounded-3xl border-2 transition-colors ${open ? 'border-tangerine bg-tangerine-soft' : 'border-border bg-card'}`}>
              <button className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-lg font-bold" aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)}>
                {question}<span className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-card transition-transform ${open ? 'rotate-180' : ''}`}><ChevronDown size={18} /></span>
              </button>
              {open && <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{answer}</p>}
            </div>; })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 pb-20">
        <div className="reveal relative mx-auto max-w-5xl overflow-hidden rounded-[44px] bg-tangerine px-6 py-16 text-center text-primary-foreground sm:px-14 sm:py-20">
          <div className="blob absolute -left-12 -top-12 size-48 bg-sun opacity-50" />
          <div className="blob absolute -bottom-16 -right-10 size-56 bg-bubble opacity-40" />
          <Star className="float absolute right-[12%] top-10 w-10 text-sun" />
          <Squiggle className="absolute bottom-10 left-[10%] w-20 text-sun" />
          <h2 className="relative mx-auto max-w-3xl text-3xl font-extrabold sm:text-5xl">Transforme alguns minutos de atividade em momentos de aprendizado e diversão.</h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg font-semibold opacity-95">Tenha centenas de atividades prontas para usar quando precisar.</p>
          <Button onClick={buy} className="relative mt-9 h-auto rounded-full bg-card px-9 py-5 font-heading text-lg font-extrabold text-foreground shadow-xl transition-transform hover:-translate-y-1 hover:bg-card sm:text-xl">Quero meu pacote por R$27 <ArrowRight className="size-6" /></Button>
        </div>
      </section>
    </main>

    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">Material digital em PDF · Crianças de 3 a 12 anos · Pagamento via Pix</footer>

    <Dialog.Root open={checkoutOpen} onOpenChange={setCheckoutOpen}>
      <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-40 bg-foreground/40" /><Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%_-_40px)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-background p-8 shadow-xl"><Dialog.Title className="font-heading text-2xl font-extrabold">As compras ainda não estão abertas</Dialog.Title><Dialog.Description className="mt-4 leading-relaxed text-muted-foreground">O pagamento e o download deste pacote ainda não estão disponíveis nesta página. Nenhuma cobrança será feita.</Dialog.Description><p className="mt-5 font-bold">Pacote completo: R$27 no Pix</p><Dialog.Close asChild><Button className="mt-6 w-full rounded-full">Entendi</Button></Dialog.Close><Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Fechar" className="absolute right-3 top-3 rounded-full"><X /></Button></Dialog.Close></Dialog.Content></Dialog.Portal>
    </Dialog.Root>
  </>;
}
