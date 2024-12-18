import type { MetadataRoute } from 'next'
 

//* refer here: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bridgewise.tech',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}