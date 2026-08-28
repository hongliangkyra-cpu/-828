import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SignJWT, jwtVerify } from 'jose';
import argon2 from 'argon2';

const COOKIE_NAME = 'hongliang_admin';
const MAX_AGE = 60 * 60 * 8;

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 32) throw new Error('AUTH_SECRET must contain at least 32 characters.');
  return new TextEncoder().encode(value);
}

export async function verifyCredentials(username: string, password: string) {
  const expectedUser = process.env.ADMIN_USERNAME;
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (!expectedUser || !hash || username !== expectedUser) return false;
  try { return await argon2.verify(hash, password); } catch { return false; }
}

export async function createSession(username: string) {
  const token = await new SignJWT({ username, role: 'admin' }).setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt().setExpirationTime(`${MAX_AGE}s`).sign(secret());
  const jar = await cookies();
  jar.set(COOKIE_NAME, token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: MAX_AGE });
}

export async function destroySession() { (await cookies()).delete(COOKIE_NAME); }

export async function getSession() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;
  try { return (await jwtVerify(token, secret())).payload as { username: string; role: string }; }
  catch { return null; }
}

export async function requireAdmin() {
  const session = await getSession();
  if (!session || session.role !== 'admin') redirect('/admin/login');
  return session;
}

export async function assertAdmin() {
  const session = await getSession();
  if (!session || session.role !== 'admin') throw new Error('Unauthorized');
  return session;
}
