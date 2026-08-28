'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import sanitizeHtml from 'sanitize-html';
import { prisma } from '@/lib/prisma';
import { assertAdmin, createSession, destroySession, verifyCredentials } from '@/lib/auth';
import { categorySchema, postSchema, productSchema } from '@/lib/validation';
import { toSlug } from '@/lib/slug';

const attempts = new Map<string, { count: number; reset: number }>();
const clean = (html: string) => sanitizeHtml(html, {
  allowedTags: ['p','h2','h3','strong','em','ol','ul','li','blockquote','a','img','br','figure','figcaption','div'],
  allowedAttributes: { a: ['href','target','rel'], img: ['src','alt','loading','width','height'], h2: ['id'], h3: ['id'], div: ['class'], figure: ['class'] },
  allowedSchemes: ['http','https'],
});
const text = (fd: FormData, key: string) => String(fd.get(key) ?? '').trim();

export type LoginState = { error?: string };
export async function loginAction(_: LoginState, fd: FormData): Promise<LoginState> {
  const key = 'single-admin'; const now = Date.now(); const entry = attempts.get(key);
  if (entry && entry.reset > now && entry.count >= 5) return { error: 'Too many attempts. Try again in 15 minutes.' };
  const valid = await verifyCredentials(text(fd, 'username'), text(fd, 'password'));
  if (!valid) { attempts.set(key, { count: (entry?.reset ?? 0) > now ? entry!.count + 1 : 1, reset: now + 15 * 60_000 }); return { error: 'Invalid username or password.' }; }
  attempts.delete(key); await createSession(text(fd, 'username')); redirect('/admin');
}

export async function logoutAction() { await destroySession(); redirect('/admin/login'); }

export async function saveCategory(fd: FormData) {
  await assertAdmin(); const id = text(fd, 'id'); const name = text(fd, 'name');
  const data = categorySchema.parse({ name, slug: text(fd, 'slug') || toSlug(name), description: text(fd, 'description'), type: text(fd, 'type'), sortOrder: text(fd, 'sortOrder') || '0' });
  if (id) await prisma.category.update({ where: { id }, data }); else await prisma.category.create({ data });
  revalidatePath('/admin/categories'); redirect('/admin/categories?ok=saved');
}

export async function deleteCategory(fd: FormData) {
  await assertAdmin(); const id = text(fd, 'id');
  const used = await prisma.category.findUnique({ where: { id }, include: { _count: { select: { posts: true, products: true } } } });
  if (!used) return;
  if (used._count.posts || used._count.products) redirect('/admin/categories?error=Category+is+still+in+use');
  await prisma.category.delete({ where: { id } }); revalidatePath('/admin/categories');
}

export async function savePost(fd: FormData) {
  await assertAdmin(); const id = text(fd, 'id');
  const parsed = postSchema.parse({ title: text(fd,'title'), slug: text(fd,'slug') || toSlug(text(fd,'title')), excerpt: text(fd,'excerpt'), content: clean(text(fd,'content')), coverImage: text(fd,'coverImage'), coverImageAlt: text(fd,'coverImageAlt'), categoryId: text(fd,'categoryId'), status: text(fd,'status'), authorName: text(fd,'authorName') || 'HONG LIANG', seoTitle: text(fd,'seoTitle'), seoDescription: text(fd,'seoDescription') });
  const data = { ...parsed, publishedAt: parsed.status === 'PUBLISHED' ? new Date() : null };
  if (id) await prisma.post.update({ where: { id }, data }); else await prisma.post.create({ data });
  revalidatePath('/admin/posts'); revalidatePath('/blog'); redirect('/admin/posts?ok=saved');
}

export async function deletePost(fd: FormData) { await assertAdmin(); await prisma.post.delete({ where: { id: text(fd,'id') } }); revalidatePath('/admin/posts'); }

function jsonRows(value: string, kind: 'strings'|'specs') {
  if (!value.trim()) return [];
  if (kind === 'strings') return value.split('\n').map(v => v.trim()).filter(Boolean);
  return value.split('\n').map(line => { const [label, ...rest] = line.split(':'); return { label: label.trim(), value: rest.join(':').trim() }; }).filter(v => v.label && v.value);
}

export async function saveProduct(fd: FormData) {
  await assertAdmin(); const id = text(fd,'id');
  const parsed = productSchema.parse({ name:text(fd,'name'),slug:text(fd,'slug')||toSlug(text(fd,'name')),model:text(fd,'model'),shortDescription:text(fd,'shortDescription'),description:clean(text(fd,'description')),categoryId:text(fd,'categoryId'),coverImage:text(fd,'coverImage'),features:text(fd,'features'),specifications:text(fd,'specifications'),applications:text(fd,'applications'),status:text(fd,'status'),sortOrder:text(fd,'sortOrder')||'0',seoTitle:text(fd,'seoTitle'),seoDescription:text(fd,'seoDescription') });
  const data = { ...parsed, features: jsonRows(parsed.features,'strings'), specifications: jsonRows(parsed.specifications,'specs'), applications: jsonRows(parsed.applications,'strings') };
  if (id) await prisma.product.update({ where:{id}, data }); else await prisma.product.create({ data });
  revalidatePath('/admin/products'); revalidatePath('/products'); redirect('/admin/products?ok=saved');
}

export async function deleteProduct(fd: FormData) { await assertAdmin(); await prisma.product.delete({ where:{id:text(fd,'id')} }); revalidatePath('/admin/products'); }
