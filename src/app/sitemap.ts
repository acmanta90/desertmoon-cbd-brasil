import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.desertmooncbd.com.br';
  const routes = [
    '',
    '/sobre-o-cbd',
    '/como-funciona',
    '/produtos',
    '/area-medica',
    '/pacientes',
    '/blog',
    '/contato',
    '/legal/privacidade',
    '/legal/termos',
  ];

  const staticPages = routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticPages, ...blogPages];
}
