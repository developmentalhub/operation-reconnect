import Link from 'next/link';
import Reveal from '../components/Reveal';
import { posts } from './posts';

export const metadata = {
  title: 'Blog — Operation Reconnect',
  description: 'Real talk on friendship, confidence, and connection from Operation Reconnect. Practical ideas for teens and teachers, based on the podcast and videos.',
};

export default function BlogPage() {
  return (
    <main>
      <section className="page-header">
        <h1>The Blog</h1>
        <p>Friendship, confidence, and connection, one idea at a time.</p>
      </section>

      <section className="blog-list">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 100}>
            <Link href={`/blog/${post.slug}`} className={`blog-card tone-${post.tone}`}>
              <span className="blog-date">
                {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span className="blog-read-more">Read the article →</span>
            </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}