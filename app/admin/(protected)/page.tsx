import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function Dashboard() {
  const [categories, posts, products, media] = await Promise.all([prisma.category.count(), prisma.post.count(), prisma.product.count(), prisma.media.count()]);
  return <><header className="admin-page-head"><div><span>OVERVIEW</span><h1>Dashboard</h1></div></header><section className="admin-stats">{[['Categories',categories,'/admin/categories'],['Articles',posts,'/admin/posts'],['Products',products,'/admin/products'],['Media',media,'/admin/media']].map(([label,value,href])=><Link href={String(href)} key={String(label)}><span>{label}</span><strong>{value}</strong><small>Manage →</small></Link>)}</section><section className="admin-welcome"><h2>Content workspace</h2><p>Create and publish website content without changing the frontend code. Draft content stays private until you publish it.</p><div><Link href="/admin/posts/new">New article</Link><Link href="/admin/products/new">New product</Link></div></section></>;
}
