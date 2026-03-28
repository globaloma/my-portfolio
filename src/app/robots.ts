import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // If you ever add a private folder
    },
    sitemap: 'https://chioma.vercel.app/sitemap.xml',
  }
}