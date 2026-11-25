import type { MetadataRoute } from 'next';
import { SITE } from '@/data/site';
import { plumbingPages } from '@/data/plumbing-service-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/plumbing-financing/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.75 },
    { url: `${SITE.url}/plumbing-services/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    ...plumbingPages.map((service) => ({ url: `${SITE.url}/${service.slug}/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 })),
  ];
}
