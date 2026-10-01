# Alphacore — GitHub-ready website

Complete React + TypeScript + Vite/Vinext website with a Three.js dual-screen foldable laptop, GLSL animation, GSAP motion, five pages, responsive styles, original brand assets, and a server-side enquiry endpoint.

## Upload to GitHub

1. Extract the ZIP on your computer. Do not upload the ZIP itself as the website source.
2. Create a GitHub repository, then choose **Add file → Upload files**.
3. Drag the contents of the extracted folder into the upload area. Keep `package.json`, `app`, and `public` at the repository root; preserve every folder's structure.
4. Include hidden files, especially `.github/workflows/deploy.yml`, `.gitignore`, and `.env.example`. On macOS, press Command + Shift + Period to show hidden files.
5. Commit the files to the `main` branch.

The package contains fewer than 100 source files. Dependencies are downloaded during installation and must not be uploaded.

## Run locally

Install Node.js 22.13 or newer, open a terminal in this folder, then run:

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal. To check the production build:

```sh
npm run typecheck
npm run build
npm run preview
```

## Get a public link

Uploading source to GitHub does not automatically host this application. This package includes a Cloudflare Workers deployment workflow; it is not a GitHub Pages static export because it has a server-side enquiry endpoint.

1. Create or sign in to your Cloudflare account.
2. Create an API token permitted to deploy Workers in your account.
3. In your GitHub repository, open **Settings → Secrets and variables → Actions**.
4. Add repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
5. Open **Actions → Deploy Alphacore → Run workflow**, or push a new commit to `main`.
6. After deployment succeeds, find the public Workers URL in the deployment output or Cloudflare dashboard. Send that HTTPS link on WhatsApp.

You can also deploy from your computer with `npx wrangler login` followed by `npm run deploy`. This creates a public deployment in your own Cloudflare account. Review your provider's plan limits first.

## Email delivery

The website and 3D controls work without an email API key. The email link opens your visitor's email application. Automatic form delivery requires a Resend account and a verified sending domain. Until configured, the form correctly reports that email delivery is not connected; it does not pretend to send or save the enquiry.

After the first deployment, set server secrets:

```sh
npx wrangler secret put RESEND_API_KEY --name alphacore-website
npx wrangler secret put CONTACT_FROM --name alphacore-website
```

Use your Resend key and a sender address on your verified domain. The recipient is `ankitkulkarni@gmail.com`. Never commit credentials to GitHub. For local testing, create `.dev.vars` with these two keys; it is ignored by Git.

When configured, update the pending-delivery notice in `components/alphacore/ContactForm.tsx` and the privacy draft. Test delivery before launch.

## Customize before launch

- Update the site URL in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to your actual deployed URL. The included URLs are placeholders for the earlier private preview.
- Hardware descriptions live in `lib/content/specifications.ts`. The supplied server/workstation configuration is proposed and is not verified laptop hardware.
- Procedural geometry lives in `lib/three/model.ts`; shaders live in `lib/three/shaders.ts`.
- The 180-degree creaseless display is a visual design concept, not a verified physical product claim.
- Confirm the final product details and review `app/privacy/page.tsx` before public launch.

No Codex account, Sites plugin, private hosting identity, credentials, or local `node_modules` directory is included or required.
