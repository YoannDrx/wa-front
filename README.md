# Weil Associés

## Maintenance

Recommended local runtime: Node 24 LTS (`.nvmrc`).

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

- Public (`NEXT_PUBLIC_*`, deliberately included in the browser bundle): `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_KEY`.
- Server only (contact form): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_TO_EMAIL`. `SMTP_USER` is also used as the message sender.

For server-side calls to its own `/api` routes, the application uses `VERCEL_URL` when Vercel system variables are available, otherwise `NEXT_PUBLIC_SITE_URL`. `NEXT_PUBLIC_API_URL` is not required.

## i18n
To add a new language : 
add a .json in src/lang
add the locale and rewrite array to next.config.js
add the locale in the menu in Header.js

that's it
