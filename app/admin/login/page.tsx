import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import LoginForm from './login-form';

export const dynamic = 'force-dynamic';
export default async function LoginPage() {
  if (await getSession()) redirect('/admin');
  return <main className="admin-login"><section><span>HONG LIANG CMS</span><h1>Welcome back</h1><p>Manage website categories, articles, products and media.</p><LoginForm /></section></main>;
}
