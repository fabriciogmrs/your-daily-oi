import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/privacidade')({
  head: () => ({ meta: [
    { title: 'Política de privacidade | Brincatividades' },
    { name: 'description', content: 'Como a Brincatividades usa o Pixel da Meta para medir visitas e anúncios.' },
    { property: 'og:title', content: 'Política de privacidade | Brincatividades' },
    { property: 'og:description', content: 'Como medimos visitas e cliques com o Pixel da Meta.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
  ] }),
  component: Privacidade,
});

function Privacidade() {
  return <main className="page-width mx-auto max-w-2xl px-5 py-16 leading-relaxed text-foreground">
    <h1 className="font-heading text-4xl font-extrabold">Política de privacidade</h1>
    <p className="mt-6">Esta página usa o <strong>Pixel da Meta</strong> (Meta Platforms, dona do Facebook e Instagram) para medir visitas e cliques no botão de compra, e para melhorar a entrega dos nossos anúncios.</p>
    <p className="mt-4">O pixel pode registrar dados técnicos como páginas vistas, cliques, navegador, endereço IP e cookies da Meta. Não enviamos nome, e-mail ou dados de pagamento por esta página. O pagamento acontece no checkout da Cakto, que tem sua própria política.</p>
    <p className="mt-4">Visitantes da União Europeia, Espaço Econômico Europeu, Reino Unido e Suíça não são rastreados. Navegadores com o sinal Global Privacy Control ativado também não.</p>
    <p className="mt-4">Para não ser rastreado, você pode ativar o Global Privacy Control, bloquear cookies de terceiros ou ajustar suas preferências de anúncios no Facebook/Instagram.</p>
    <a href="/" className="mt-8 inline-block font-bold text-primary underline">Voltar para a página</a>
  </main>;
}
