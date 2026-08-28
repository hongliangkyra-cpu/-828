import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const revalidate = 300;
export const metadata: Metadata = {
  title: 'Water Tank Engineering Resources | HONG LIANG',
  description: 'Engineering guides for stainless steel water tank material selection, capacity planning, project specifications and global procurement.',
};

export default async function BlogIndex() {
  const posts = await prisma.post.findMany({ where: { status: 'PUBLISHED' }, include: { category: true }, orderBy: { publishedAt: 'desc' } });
  return <main className="blog-page blog-index-page">
    <div className="blog-utility"><div className="blog-container"><span>✉ harris@hongliangglobal.com</span><span>◉ WhatsApp +86 18127154227</span><span className="blog-language">◎ English⌄</span></div></div>
    <header className="blog-header"><div className="blog-container blog-header-inner"><Link href="/" className="blog-logo"><Image src="/assets/logo.jpg" alt="HONG LIANG" width={185} height={74} priority /></Link><nav><Link href="/">Home</Link><Link href="/products/stainless-steel-water-tank">Products</Link><Link href="/blog">Resources</Link><Link href="/contact">Contact</Link></nav><Link className="blog-header-cta" href="/contact">Get a Quote</Link></div></header>
    <section className="blog-index-hero"><div className="blog-container"><p className="blog-category">ENGINEERING KNOWLEDGE</p><h1>Water Storage Project Resources</h1><p>Practical, specification-led guidance for consultants, contractors, distributors and project buyers.</p></div></section>
    <section className="blog-container blog-index-grid">{posts.map(post => <article key={post.id} className="blog-index-card"><Link href={`/blog/${post.slug}`} className="blog-index-image"><Image src={post.coverImage} alt={post.coverImageAlt} fill sizes="(max-width: 900px) 100vw, 33vw" /></Link><div><span>{post.category.name}</span><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link href={`/blog/${post.slug}`}>Read engineering guide →</Link></div></article>)}</section>
    <footer className="blog-footer"><div className="blog-container"><strong>HONG LIANG</strong><span>Stainless Steel Water Tanks &amp; Water Supply Solutions</span><span>harris@hongliangglobal.com</span></div></footer>
  </main>;
}
