<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the product sales page at the index route, with page metadata in its leaf head; the root provides the shared document shell.
- Use semantic CSS tokens and the shared Button for the sales page; this keeps the presentation consistent and themeable.
- Keep catalog and FAQ data in a browser-safe content module; this separates product content from presentation.
- Purchase calls to action show an honest unavailable-payment dialog until the owner supplies a checkout destination or enables payments; never reuse a reference site's checkout.
