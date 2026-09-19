import { posts } from './blog/posts';

export default function sitemap() {
  const baseUrl = 'https://operationreconnect.com';

  const staticPages = [
    '',
    '/podcast',
    '/videos',
    '/webinars',
    '/challenges',
    '/blog',
    '/subscribe',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...blogPages];
}