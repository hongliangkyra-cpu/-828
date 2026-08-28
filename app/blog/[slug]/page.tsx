import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import sanitizeHtml from 'sanitize-html';
import { prisma } from '@/lib/prisma';

export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

async function getPost(slug: string) {
  return prisma.post.findFirst({
    where: { slug, status: 'PUBLISHED' },
    include: { category: true },
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: post.coverImage ? [{ url: post.coverImage, alt: post.coverImageAlt }] : [],
      publishedTime: post.publishedAt?.toISOString(),
      authors: [post.authorName],
    },
  };
}

function safeArticle(html: string) {
  return sanitizeHtml(html, {
    allowedTags: ['p','h2','h3','strong','em','ol','ul','li','blockquote','a','img','br','figure','figcaption','div'],
    allowedAttributes: {
      a: ['href','target','rel'],
      img: ['src','alt','loading','width','height'],
      h2: ['id'], h3: ['id'], div: ['class'], figure: ['class'],
    },
    allowedSchemes: ['http','https'],
    allowedSchemesByTag: { img: ['http','https'] },
  });
}

function getToc(html: string) {
  return [...html.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map((match) => ({ id: match[1], label: match[2] }));
}

export default async function DynamicBlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const toc = getToc(post.content);
  const published = post.publishedAt ?? post.createdAt;
  const wordCount = post.content.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
  const readingMinutes = Math.max(8, Math.round(wordCount / 220));

  return <main className="blog-page">
    <div className="blog-utility"><div className="blog-container"><span>✉ harris@hongliangglobal.com</span><span>◉ WhatsApp +86 18127154227</span><span className="blog-language">◎ English⌄</span></div></div>
    <header className="blog-header"><div className="blog-container blog-header-inner">
      <Link href="/" className="blog-logo"><Image src="/assets/logo.jpg" alt="HONG LIANG" width={185} height={74} priority /></Link>
      <nav><Link href="/">Home</Link><Link href="/products/stainless-steel-water-tank">Products</Link><Link href="/blog">Resources</Link><Link href="/contact">Contact</Link></nav>
      <a className="blog-header-cta" href="#sidebar-form">Get a Quote</a>
    </div></header>

    <div className="blog-container blog-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Resources</Link><span>/</span><strong>{post.title}</strong></div>
    <section className="blog-hero"><div className="blog-container blog-hero-grid">
      <div><p className="blog-category">{post.category.name.toUpperCase()}</p><h1>{post.title}</h1><p className="blog-deck">{post.excerpt}</p><div className="blog-meta"><span>By {post.authorName}</span><span>Updated {published.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span><span>{readingMinutes} min read</span></div></div>
      <div className="blog-hero-image"><Image src={post.coverImage} alt={post.coverImageAlt} fill priority sizes="50vw" /></div>
    </div></section>

    <div className="blog-container blog-layout">
      <article className="blog-article dynamic-blog-article">
        <nav className="blog-toc" aria-label="Article table of contents"><div><span>QUICK CONTENTS</span><strong>Jump to a section</strong></div><ol>{toc.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>
        <div dangerouslySetInnerHTML={{ __html: safeArticle(post.content) }} />
      </article>
      <aside className="blog-sidebar"><div className="blog-sticky">
        <section className="blog-company"><div className="blog-company-image"><Image src="/assets/generated-pages/about-hero.png" alt="HONG LIANG engineering and export team" fill sizes="330px" /></div><div className="blog-company-copy"><span>ABOUT HONG LIANG</span><h2>Water storage expertise backed by real production.</h2><p>We manufacture stainless steel sectional water tanks and integrated water supply equipment for building, fire protection and industrial projects.</p><ul><li>Project-specific engineering</li><li>Factory quality control</li><li>Export coordination</li></ul><Link href="/products/stainless-steel-water-tank">View our tank system →</Link></div></section>
        <form className="blog-mini-form" id="sidebar-form"><h2>Ask an engineer</h2><p>Share your capacity, dimensions and application. We typically reply within 24 hours.</p><label>Name<input name="name" required /></label><label>Business email<input name="email" type="email" required /></label><label>Capacity / dimensions<input name="capacity" placeholder="e.g. 50 m³, 5 × 4 × 3 m" /></label><label>Message<textarea name="message" placeholder="Application, country and requirements" /></label><button type="submit">Request a Quote</button><small>WhatsApp: +86 18127154227</small></form>
      </div></aside>
    </div>
    <footer className="blog-footer"><div className="blog-container"><strong>HONG LIANG</strong><span>Stainless Steel Water Tanks &amp; Water Supply Solutions</span><span>harris@hongliangglobal.com</span></div></footer>
  </main>;
}
