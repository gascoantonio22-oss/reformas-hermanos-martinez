import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { BlogCard } from "@/components/blog-card"
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo"
import { blogIndexDescription, blogIndexTitle, blogPosts } from "@/lib/blog"

export const metadata: Metadata = buildMetadata({
  title: blogIndexTitle,
  description: blogIndexDescription,
  path: "/blog",
  keywords: ["blog reformas madrid", "precios reformas madrid", "consejos reforma"],
})

const featuredPosts = blogPosts.slice(0, 6)
const secondaryPosts = blogPosts.slice(6)

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          buildWebPageSchema({
            name: blogIndexTitle,
            description: blogIndexDescription,
            path: "/blog",
          }),
          buildBreadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <Header />

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d85b1d]">
              Blog SEO
            </p>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1a2b3c] text-balance sm:text-4xl md:text-5xl">
              Guías, precios y consejos para planificar mejor tu reforma
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#51677c]">
              Artículos prácticos para entender presupuestos, plazos, permisos y materiales antes
              de empezar una reforma en Madrid.
            </p>
          </div>

          <div className="mt-12 sm:mt-16">
            <div className="mb-6 sm:mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d85b1d]/80">
                Guías principales
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  eyebrow={post.eyebrow}
                  title={post.title}
                  subtitle={post.subtitle}
                />
              ))}
            </div>
          </div>

          <div className="mt-14 sm:mt-16">
            <div className="mb-6 sm:mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d85b1d]/80">
                Más artículos del blog
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {secondaryPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  eyebrow={post.eyebrow}
                  title={post.title}
                  subtitle={post.subtitle}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
