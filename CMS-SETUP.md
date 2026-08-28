# HONG LIANG CMS setup

## 1. Configure environment

Copy `.env.example` to `.env.local` and set a PostgreSQL connection, a random `AUTH_SECRET` of at least 32 characters, the administrator username, and an Argon2id password hash.

Generate the hash without storing the plain password:

```powershell
pnpm cms:hash "your-long-password"
```

## 2. Initialize the database

```powershell
pnpm db:generate
pnpm db:migrate
pnpm db:seed
```

The seed creates one article category and one product category.

## 3. Media storage

During local development, uploads are written to `public/uploads` and ignored by Git. In production, create a public Supabase Storage bucket and configure `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_STORAGE_BUCKET`, and `NEXT_PUBLIC_MEDIA_BASE_URL`. The service-role key is server-only.

## 4. Open the CMS

Start the app and open `http://127.0.0.1:4173/admin`. Unauthenticated requests are redirected to `/admin/login`.

Create categories before creating the first article or product. Drafts remain private. Change status to `PUBLISHED` to publish.
