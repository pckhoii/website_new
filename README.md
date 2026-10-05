# Universe of Signals

Personal website for Phạm Công Nguyễn Khôi. Next.js App Router, React, TypeScript, and CSS. English and Vietnamese are supported.

## Development

```sh
npm ci
npm run dev
```

Run `npm run lint` and `npm run build` before publishing. On Windows, use `npm.cmd` if PowerShell blocks npm scripts.

## Add real content

The Work, Notes, Reading, and Places collections start empty. Add entries to the matching `entries` array in `src/lib/collections.ts`:

```ts
{
  id: "my-first-project",
  title: { en: "My first project", vi: "Dự án đầu tiên" },
  description: { en: "What I built and learned.", vi: "Những điều mình xây và học được." },
  meta: "2026",
  // href: "https://...", // Optional link to a real project or article.
}
```

An empty array displays a short empty-state message. No demo content or preview images are published. Personal profile and CV information live in `src/lib/content.ts`; the portrait lives in `public/profile/khoi.png`.

## Deployment

The GitHub remote is `pckhoii/website_new`. The repository includes `vercel.json` for Next.js. If the repository is connected to Vercel, pushes to its production branch trigger deployments. Check the GitHub commit status or Vercel dashboard to confirm a successful deployment.
