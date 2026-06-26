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

Copy `.env.example` to `.env.local` and fill the required values:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Security note: if a private key or SMTP password was previously committed or shared, rotate it in the provider dashboard before deploying.

## i18n
To add a new language : 
add a .json in src/lang
add the locale and rewrite array to next.config.js
add the locale in the menu in Header.js

that's it
