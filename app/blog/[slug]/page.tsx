import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { JsonLd } from "@/components/json-ld"
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildMetadata } from "@/lib/seo"
import { blogPosts, getBlogPathBySlug, getBlogPostBySlug, type BlogPost } from "@/lib/blog"
import { siteConfig } from "@/lib/site"

type BlogPostPageProps = {
  params: {
    slug: string
  } | Promise<{
    slug: string
  }>
}

function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(value))
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await Promise.resolve(params)
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return buildMetadata({
      title: "Blog no encontrado | Hermanos Martínez",
      description: "La entrada solicitada no existe.",
      path: "/blog",
    })
  }

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: getBlogPathBySlug(post.slug),
    keywords: [post.title, "blog reformas madrid", "reformas madrid"],
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await Promise.resolve(params)
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = post.relatedSlugs
    .map((relatedSlug) => getBlogPostBySlug(relatedSlug))
    .filter((item): item is BlogPost => Boolean(item))

  return (
    <main className="min-h-screen bg-[#fbf9f5]">
      <JsonLd
        data={[
          buildArticleSchema({
            title: post.title,
            description: post.metaDescription,
            path: getBlogPathBySlug(post.slug),
            publishDate: post.publishDate,
            modifiedDate: post.modifiedDate,
            authorName: siteConfig.name,
          }),
          buildBreadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: getBlogPathBySlug(post.slug) },
          ]),
          ...(post.faq?.length ? [buildFAQSchema(post.faq)] : []),
        ]}
      />
      <Header />

      <article className="mx-auto max-w-[46rem] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d85b1d]">
            <span>{post.eyebrow}</span>
            <span className="h-px w-10 bg-border" />
            <span>{formatPublishedDate(post.publishDate)}</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#182838] text-balance sm:text-5xl md:text-[3.5rem] md:leading-[1.02]">
            {post.title}
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[#5b6d7e]">
            {post.subtitle}
          </p>
        </header>

        <div className="mt-12 border-t border-border/70 pt-10">
          <div className="space-y-10 md:space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading} className="scroll-mt-24">
                <div className="mb-5 h-px w-12 bg-[#d85b1d]/40" />
                <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-[#182838] text-balance sm:text-3xl">
                  {section.heading}
                </h2>

                <div className="mt-5 max-w-3xl space-y-5 text-[16px] leading-8 text-[#4f6275]">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.bullets?.length ? (
                    <ul className="space-y-4">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d85b1d]/70" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.orderedItems?.length ? (
                    <ol className="space-y-4">
                      {section.orderedItems.map((item, index) => (
                        <li key={item} className="flex gap-4">
                          <span className="text-sm font-semibold text-[#d85b1d]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>

                {section.table ? (
                  <div className="mt-6 overflow-x-auto border-y border-border/70">
                    {section.table.caption ? (
                      <div className="border-b border-border/70 py-3 text-sm text-[#5b6d7e]">
                        {section.table.caption}
                      </div>
                    ) : null}
                    <table className="min-w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-border/70 text-[11px] uppercase tracking-[0.18em] text-[#8a97a6]">
                          {section.table.headers.map((header) => (
                            <th key={header} scope="col" className="py-3 pr-4 font-semibold">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("|")} className="border-b border-border/40 last:border-b-0">
                            {row.map((cell) => (
                              <td key={cell} className="py-4 pr-4 align-top leading-7 text-[#4f6275]">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>

        {post.faq?.length ? (
          <div className="mt-16">
            <FaqSection
              id="faq"
              eyebrow="Preguntas frecuentes"
              title="Dudas habituales"
              description="Respuestas claras, sin rodeos, para cerrar los puntos que suelen quedar abiertos antes de una reforma."
              faqs={post.faq}
            />
          </div>
        ) : null}

        <section className="mt-16 border-t border-border/70 pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d85b1d]">
            Siguiente paso
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#182838] text-balance">
            ¿Quieres hablar de tu reforma?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5b6d7e]">
            Si estás valorando una cocina, un baño o una reforma completa, podemos ayudarte a
            ordenar el alcance y comparar partidas con criterio.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href={post.serviceLinks[0]?.href ?? "/blog"}
              className="inline-flex items-center gap-2 border-b border-[#d85b1d] pb-1 text-sm font-semibold text-[#d85b1d] transition-colors hover:border-[#b94d18] hover:text-[#b94d18]"
            >
              {post.serviceLinks[0]?.title ?? "Ver servicio relacionado"}
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#182838] transition-colors hover:text-[#d85b1d]"
            >
              Volver al blog
            </Link>
          </div>
        </section>
      </article>

      <section className="border-t border-border/70 bg-white/70 py-14 sm:py-16">
        <div className="mx-auto max-w-[46rem] px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d85b1d]">
                Servicios relacionados
              </p>
              <div className="mt-6 divide-y divide-border/70 border-y border-border/70">
                {post.serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group block py-5 transition-colors hover:text-[#d85b1d]"
                  >
                    <span className="block text-base font-semibold tracking-tight text-[#182838] sm:text-lg group-hover:text-[#d85b1d]">
                      {service.title}
                    </span>
                    <span className="mt-2 block max-w-2xl text-sm leading-7 text-[#5b6d7e]">
                      {service.subtitle}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d85b1d]">
                Más lecturas
              </p>
              <div className="mt-6 divide-y divide-border/70 border-y border-border/70">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={getBlogPathBySlug(related.slug)}
                    className="group block py-5 transition-colors hover:text-[#d85b1d]"
                  >
                    <span className="block text-base font-semibold tracking-tight text-[#182838] sm:text-lg group-hover:text-[#d85b1d]">
                      {related.title}
                    </span>
                    <span className="mt-2 block max-w-2xl text-sm leading-7 text-[#5b6d7e]">
                      {related.subtitle}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
