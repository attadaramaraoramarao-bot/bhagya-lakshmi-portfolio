# A. Bhagya Lakshmi — Portfolio

A responsive portfolio website for A. Bhagya Lakshmi, built with React, Vite, JavaScript, and Tailwind CSS.

## Run locally in VS Code

1. Open this folder in VS Code.
2. Install Node.js 20+ and pnpm 10+.
3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open the local URL printed by Vite.

## Edit portfolio content

All editable facts live in [`src/data/portfolio.js`](src/data/portfolio.js). Update only verified information. Unknown internship and education details are intentionally labeled so they can be replaced later without inventing content.

## Add a real resume PDF

1. Add the verified PDF at `public/resume.pdf`.
2. Set `resumePath: '/resume.pdf'` in `src/data/portfolio.js`.
3. Only then will the Resume section enable the download button.
4. Never add a placeholder, fake file, or missing link.

## Contact form

The form validates all fields in the browser. It stays disabled until a real contact service is configured. To connect one safely, add a server-side endpoint or trusted form provider and update `contactServiceConfigured` only after the service is actually ready. Do not expose private API keys in client-side Vite variables or commit secrets.

## Build and test the production bundle

```bash
pnpm build
pnpm preview
```

Before launch, test the responsive layout at mobile, tablet, and desktop sizes; test the theme toggle, mobile menu, anchor navigation, disabled resume state, contact validation, and all external profile links.

## Upload to GitHub

```bash
git init
git add .
git commit -m "Create Bhagya Lakshmi portfolio"
git branch -M main
git remote add origin https://github.com/<your-account>/<your-repository>.git
git push -u origin main
```

This project is configured to avoid committing `.env` files, dependencies, build output, or private credentials.

## Deploy to Vercel

1. Import the GitHub repository into Vercel.
2. Keep the framework preset as **Vite**.
3. Use `pnpm install` for install and `pnpm build` for the build command.
4. Set the output directory to `dist`.
5. Deploy and open the generated URL.
6. Test the live site on a phone and desktop, including navigation and any configured resume/contact integration.

## Deployment checklist

- Add a real resume PDF before enabling its download button.
- Replace editable internship and education values with verified facts.
- Add only real project links.
- Configure and test a real contact service before enabling form submission.
- Confirm no keys, passwords, or private credentials are present in the repository.
