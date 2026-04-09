import type { Metadata } from "next"

import type { FaqItem } from "@/lib/site"
import { siteConfig } from "@/lib/site"

type MetadataOptions = {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
}

type WebPageSchemaOptions = {
  name: string
  description: string
  path: string
}

type ServiceSchemaOptions = {
  name: string
  description: string
  path: string
  serviceType: string
  offerLabel?: string
}

type BreadcrumbItem = {
  name: string
  path: string
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}

export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
  keywords = [],
}: MetadataOptions): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: absoluteUrl(path),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
    other: {
      "geo.region": "ES-M",
      "geo.placename": siteConfig.locality,
    },
  }
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/favicon-rhm.png"),
    email: siteConfig.email,
    telephone: siteConfig.phoneHref,
    sameAs: siteConfig.sameAs,
  }
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "es-ES",
  }
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.defaultOgImage),
    email: siteConfig.email,
    telephone: siteConfig.phoneHref,
    priceRange: "€€",
    areaServed: {
      "@type": "City",
      name: siteConfig.locality,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
      // TODO: añadir streetAddress y postalCode cuando se publiquen.
    },
    openingHoursSpecification: siteConfig.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    sameAs: siteConfig.sameAs,
  }
}

export function buildWebPageSchema({ name, description, path }: WebPageSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "es-ES",
    about: {
      "@id": `${siteConfig.url}#localbusiness`,
    },
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
  }
}

export function buildServiceSchema({
  name,
  description,
  path,
  serviceType,
  offerLabel,
}: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: {
      "@id": `${siteConfig.url}#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.locality,
    },
    offers: offerLabel
      ? {
          "@type": "Offer",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          description: offerLabel,
        }
      : undefined,
  }
}

export function buildFAQSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

type ArticleSchemaOptions = {
  title: string
  description: string
  path: string
  publishDate: string
  modifiedDate: string
  authorName: string
  imageUrl?: string
}

export function buildArticleSchema({
  title,
  description,
  path,
  publishDate,
  modifiedDate,
  authorName,
  imageUrl = siteConfig.defaultOgImage,
}: ArticleSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: absoluteUrl(imageUrl),
    datePublished: publishDate,
    dateModified: modifiedDate,
    author: {
      "@type": "Organization",
      name: authorName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/favicon-rhm.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
  }
}
