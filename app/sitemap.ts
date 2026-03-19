import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://matthew-means.dev'

  // These represent the folders inside your (Client) group
  const clientRoutes = [
    '',           // This is the page.tsx directly under (Client)
    '/about',
    '/contact',
    '/portfolio',
    '/quote',
    '/showroom',
  ]

  const sitemapEntries = clientRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    // Give the homepage a higher priority than the sub-pages
    priority: route === '' ? 1.0 : 0.8,
  }))

  return sitemapEntries
}