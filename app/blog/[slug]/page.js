import Link from 'next/link';
import { posts } from '../posts';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} — Operation Reconnect`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="blog-post-layout">
      <aside className="blog-sidebar">
        <p className="blog-sidebar-label">All Topics</p>
        <nav className="blog-sidebar-nav">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className={`blog-sidebar-link tone-${p.tone} ${p.slug === slug ? 'active' : ''}`}
            >
              {p.title}
            </Link>
          ))}
        </nav>
      </aside>

      <article className="blog-post">
        <div className="blog-post-header">
          <span className="blog-date">
            {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <h1>{post.title}</h1>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              author: {
                '@type': 'Person',
                name: 'Hugh',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Operation Reconnect',
              },
            }),
          }}
        />

        <YouTubeEmbed videoId={post.youtubeId} orientation={post.orientation} />

        <div className="blog-post-body">
          {post.content.map((block, i) =>
            block.type === 'heading' ? (
              <h2 key={i}>{block.text}</h2>
            ) : (
              <p key={i}>{block.text}</p>
            )
          )}
        </div>
      </article>
    </main>
  );
}