'use client';
import { useActionState } from 'react';
import { loginAction } from '../actions';

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, {});
  return <form action={action} className="admin-login-form">
    <label>Username<input name="username" autoComplete="username" required /></label>
    <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
    {state.error ? <p className="admin-error">{state.error}</p> : null}
    <button disabled={pending}>{pending ? 'Signing in…' : 'Sign in'}</button>
  </form>;
}
