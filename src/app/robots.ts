import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/studio/',
      },
      {
        userAgent: ['GPTBot', 'PerplexityBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended'],
        allow: '/',
        disallow: '/studio/',
      },
    ],
    sitemap: 'https://rainbowsprouts.in/sitemap.xml',
  };
}
