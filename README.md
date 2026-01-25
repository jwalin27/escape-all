# ESCAPE Monorepo

This repo contains three apps:
- Cyber LMS (Go API + React/Vite frontend)
- ESC (Next.js)
- Cyber Phishing Game (Vite)

## Local / Staging / Production

### Cyber LMS
Local
- Backend: `cd cyber-lms` → `docker-compose up` (or `go run ./cmd/api`) and copy `cyber-lms/.env.example` to `.env.local` if you want env-based config.
- Frontend: `cd cyber-lms/frontend` → `npm install` → `npm run dev` and copy `cyber-lms/frontend/.env.example` to `.env.local`.

Staging
- Backend: set `CYBER_LMS_DATABASE_URL` and `CYBER_LMS_AUTH_JWT_SECRET` in your hosting environment; avoid committing `configs/config.yaml`.
- Frontend: set `VITE_API_BASE_URL` in the hosting environment (or platform config) for the staged API.

Production
- Backend: configuration is **env-only**; set the same variables as staging plus any overrides you need.
- Frontend: configuration is **env-only**; set `VITE_API_BASE_URL` in the production environment.

### ESC
Local
- `cd esc/esc` → `npm install` → `npm run dev` and copy `esc/esc/.env.example` to `.env.local`.

Staging
- Configure `NEXT_PUBLIC_*` and server-only vars in the hosting environment (Vercel, container, etc.).

Production
- Configuration is **env-only**; no `.env` files should be baked into the build.

### Cyber Phishing Game
Local
- `cd Cyber-phising-game` → `npm install` → `npm run dev` and copy `Cyber-phising-game/.env.example` to `.env.local` if needed.

Staging
- If you add any `VITE_*` config, set it via environment variables in the hosting platform.

Production
- Configuration is **env-only**; set `VITE_*` variables in the production environment.

See `RUNBOOK.md` for more detailed setup and environment contract details.
