import Link from 'next/link';
import { requireAdmin } from '@/lib/auth';
import { logoutAction } from '../actions';

export const dynamic = 'force-dynamic';
export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin();
  return <div className="admin-shell"><aside><Link className="admin-brand" href="/admin">HONG LIANG <small>CMS</small></Link><nav><Link href="/admin">Dashboard</Link><Link href="/admin/categories">Categories</Link><Link href="/admin/posts">Articles</Link><Link href="/admin/products">Products</Link><Link href="/admin/media">Media</Link><Link href="/" target="_blank">View website ↗</Link></nav><form action={logoutAction}><button className="admin-logout">Sign out · {session.username}</button></form></aside><main className="admin-main">{children}</main></div>;
}
