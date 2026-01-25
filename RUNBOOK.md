# Project Runbook

This document provides local, staging, and production setup along with the env/config contract for each app.

## Configuration Contract

### Cyber LMS (Go API)
Required (staging/production)
- `CYBER_LMS_DATABASE_URL`: Postgres connection string.
- `CYBER_LMS_SUPABASE_ISSUER`: Supabase JWT issuer.
- `CYBER_LMS_SUPABASE_AUDIENCE`: Supabase JWT audience (usually `authenticated`).
- `CYBER_LMS_SUPABASE_JWT_SECRET` or `CYBER_LMS_SUPABASE_JWKS_URL`: token verification key source.

Optional
- `CYBER_LMS_SERVER_ADDRESS`: bind address (default `:8080`).
- `CYBER_LMS_MIGRATIONS_DIR`: migrations directory (default `migrations`).
- `CYBER_LMS_LOGLEVEL`: `debug|info|warn|error` (default `info`).
- `CYBER_LMS_AUTH_TOKEN_TTL`: token lifetime (default `24h`).
- `CYBER_LMS_AUTH_PASSWORD_ENABLED`: enable legacy `/auth/register` and `/auth/login` (default `false`).

Local
- `.env.local` supported (see `cyber-lms/.env.example`).
- `configs/config.yaml` can be used locally; do not rely on it in staging/prod.

Staging/Production
- **Env-only configuration**. Set required vars in your hosting platform.
- Do not commit secrets; do not bake `.env` files into container images.

Provisioning
- `POST /provision/ensure` with `Authorization: Bearer <supabase_access_token>`.
- Body should include either `tenant_name` (new org) or `invite_token` (existing org invite). If the user already exists, an empty body is accepted (idempotent).
- Managers/admins can create invites via `POST /invites`.
- Invite flow: open ESC with `?invite_token=<token>` and sign in; ESC forwards the token to LMS provisioning.
- Single sign-in flow: LMS redirects unauthenticated users to ESC with `?returnTo=/path`. ESC validates the path and returns users to the same LMS route after auth.

### Cyber LMS Frontend (Vite)
Required
- `VITE_API_BASE_URL`: Go API base URL.

Local
- `.env.local` supported (see `cyber-lms/frontend/.env.example`).

Staging/Production
- **Env-only configuration** via platform settings.

### ESC (Next.js)
Required (client)
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon/public key.

Required (server)
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key.
- `SMTP_USER`: SMTP username/email.
- `SMTP_PASS`: SMTP password/app password.

Optional
- `NEXT_PUBLIC_SITE_URL`: Base site URL for links/emails.
- `NEXT_PUBLIC_GOOGLE_HD`: Google Workspace hosted domain.
- `NEXT_PUBLIC_AZURE_TENANT`: Azure AD tenant ID.
- `NEXT_PUBLIC_LMS_URL`: LMS frontend URL for post-auth redirects.
- `NEXT_PUBLIC_LMS_API_BASE_URL`: LMS API base URL for provisioning.

Local
- `.env.local` supported (see `esc/esc/.env.example`).

Staging/Production
- **Env-only configuration** via platform settings.

### Cyber Phishing Game (Vite)
Required
- None currently.

Local
- `.env.local` supported if `VITE_*` variables are added (see `Cyber-phising-game/.env.example`).

Staging/Production
- **Env-only configuration** via platform settings.

## 1. Cyber LMS

The Cyber LMS is composed of a Go backend and a React frontend.

### Backend

Local (Docker - recommended)
1. Navigate to the `cyber-lms` directory.
2. Run `docker-compose up`. This starts the Go API server and a Postgres database.

Local (Go)
1. Make sure Go is installed and Postgres is running.
2. Copy `cyber-lms/.env.example` to `.env.local` and set `CYBER_LMS_DATABASE_URL` and `CYBER_LMS_AUTH_JWT_SECRET`.
3. Navigate to the `cyber-lms` directory.
4. Run `go run ./cmd/api`.

Staging/Production
1. Set required `CYBER_LMS_*` variables in your hosting environment.
2. Run migrations (via `go run ./cmd/migrate` or container entrypoint).
3. Run the API server.

### Frontend
Local
1. Navigate to the `cyber-lms/frontend` directory.
2. Run `npm install`.
3. Copy `cyber-lms/frontend/.env.example` to `.env.local` and set `VITE_API_BASE_URL`.
4. Run `npm run dev`.

Staging/Production
1. Set `VITE_API_BASE_URL` to the staged/prod API URL.
2. Build and deploy the frontend.

## 2. ESC

The ESC application is a Next.js project.

Local
1. Navigate to the `esc/esc` directory.
2. Run `npm install`.
3. Copy `esc/esc/.env.example` to `.env.local` and set required variables.
4. Run `npm run dev`.

Staging/Production
1. Set required `NEXT_PUBLIC_*` and server-only vars in the hosting environment.
2. Build and deploy the app.

## 3. Cyber Phishing Game

The Cyber Phishing Game is a Vite-powered web game.

Local
1. Navigate to the `Cyber-phising-game` directory.
2. Run `npm install`.
3. (Optional) Copy `Cyber-phising-game/.env.example` to `.env.local` for any `VITE_*` config.
4. Run `npm run dev`.

Staging/Production
1. Set `VITE_*` variables in the hosting environment if used.
2. Build and deploy the app.
