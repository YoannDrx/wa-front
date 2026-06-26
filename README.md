# Weil Associés

## Maintenance

Recommended local runtime:

```bash
nvm use
yarn install
yarn lint
yarn build
yarn test:e2e
```

The project runs on Next.js Pages Router. Keep dependency upgrades on a dedicated branch and validate the public responsive flows before deployment.

## Environment variables

Copy `.env.example` to `.env.local` and fill the required values. The project uses two categories of variables:

- Public (`NEXT_PUBLIC_*`, deliberately included in the browser bundle): `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Server only (contact form and article administration): `SUPABASE_SERVICE_ROLE_KEY`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`.

On Vercel, system environment variables are enabled. The application therefore uses `VERCEL_URL` for server-side calls to its own `/api` routes. A legacy `NEXT_PUBLIC_API_URL` pointing to Supabase is ignored server-side, preventing those calls from being sent to Supabase by mistake.

## i18n
To add a new language : 
add a .json in src/lang
add the locale and rewrite array to next.config.js
add the locale in the menu in Header.js

that's it
