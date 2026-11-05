# Rohini Funeral Directors — Next.js

Next.js App Router project matching the latest light-theme website, including the compact responsive header, original unmodified logo, original images, full About/Team content, 8 service pages, service dialogs, FAQs, telephone/email/WhatsApp/Facebook links and directions.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
```

The project is configured for static export. Upload the generated `out/` directory to static hosting, or import the project into Vercel using the Next.js preset. No environment variables, database or API keys are needed. For a server-hosted Next.js deployment with `npm start`, remove `output: "export"` in next.config.mjs and rebuild first.

## Edit

- `app/globals.css`: design and responsive styles
- `components/Header.jsx`: navigation and call button
- `lib/markup.js`: homepage and footer content (server-rendered trusted HTML)
- `lib/services.js`: original service copy and images
- `components/ServiceInteractions.jsx`: service cards/dialog interactions
- `public/assets`: original images and logo

Calls and messaging links open the visitor’s chosen apps. No contact form backend is included.
"# rohini" 
