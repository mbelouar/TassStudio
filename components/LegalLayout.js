import PageHero from "./PageHero";

/**
 * Layout for long legal documents: hero, sticky table of contents on
 * desktop, readable text column.
 * `toc` is a list of { id, title } matching the <h2 id> values in children.
 */
export default function LegalLayout({ title, updated, intro, toc = [], children }) {
  return (
    <>
      <PageHero eyebrow={`Last updated · ${updated}`} title={title} intro={intro} />
      <div className="px-5 pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[260px_1fr]">
          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <nav aria-label="On this page" className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
                <p className="eyebrow mb-4">On this page</p>
                <ol className="space-y-2 text-sm">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`} className="block text-mute transition hover:text-ion">{t.title}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}
          <article className="prose-legal panel max-w-3xl p-6 sm:p-10">{children}</article>
        </div>
      </div>
    </>
  );
}
