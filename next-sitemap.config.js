/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://matthew-means.dev',
  generateRobotsTxt: true,
  // 1. Exclude all paths that belong to the Admin section
  exclude: ['/admin', '/admin/*'], 
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        // 2. Explicitly tell search engines not to crawl the Admin area
        disallow: ['/admin'], 
        allow: '/',
      },
    ],
  },
  // Optional: Custom transform if you want to verify 
  // exactly which paths are being included
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path.includes('/client') ? 0.9 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}