# Arslan Fayyaz — 3D Master Portfolio

Modern React + Vite portfolio with a soft light-green + light-purple visual system, responsive layout, lightweight 3D CSS scene, project/experience data files, and an automatic recognition carousel.

## Run locally
1. Install Node.js 18+ (Node 20+ recommended).
2. Open this folder in terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL Vite shows.

## Vercel
Import the GitHub repository into Vercel. Framework should be detected as Vite. Build command: `npm run build`. Output directory: `dist`.

## IMPORTANT: future editing
Most content is separated from the UI:
- `src/data/site.js` — name, email, WhatsApp, map, GitHub, LinkedIn, Instagram, Facebook, Voiceflow.
- `src/data/content.js` — projects, experience, education, certifications, awards, skills and review slide data.
- `public/reviews/` — the original review screenshots used by the carousel.
- `public/profile.jpg` — add Arslan's real profile photo here. The About section currently shows a lightweight AF placeholder so the site works even before the photo is added.
- CV: add `public/Arslan-Fayyaz-CV.pdf` and add a CV link in `src/App.jsx` if desired.

## Reviews carousel
The Recognition section automatically advances every 5.6 seconds, supports previous/next buttons, dots, mouse pause and mobile swipe can be added without changing the data. The PICS Official screenshot is intentionally the final slide.

## Contact form
The default contact form uses `mailto:` to prepare a message for `arslanfayyaz1997@gmail.com`; it does not expose a password or API key. For direct server-side email, connect a provider later (Formspree, Web3Forms, Resend, or a Vercel API route) and replace the submit handler.

## Social links
Update the URLs in `src/data/site.js`. `#` means the link is not configured yet.

## Performance/mobile
The 3D effect is CSS-based rather than a heavy WebGL scene. Layout breakpoints are included for mobile/tablet/desktop and `prefers-reduced-motion` is respected.
