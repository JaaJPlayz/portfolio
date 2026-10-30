# Developer Portfolio

A responsive, dark editorial-style developer portfolio built with plain HTML, CSS, and JavaScript. It is designed to publish directly on GitHub Pages—no build step, framework, or package manager required.

## Before publishing

Search the project for these placeholders and update them:

- `Your Name` / `YOUR NAME` — your preferred public name
- `YOUR_EMAIL@example.com` — your contact email
- `Y.` — initials or a personal mark
- The biography and project descriptions — verify that every claim accurately reflects your experience
- The GitHub links — replace if your public username differs

The RSEM project is presented as in development, not as a completed production product. Update the stack and status as the repository evolves.

## Deploy on GitHub Pages

1. Create a public repository named `portfolio` (or another name you prefer) on GitHub.
2. Upload `index.html`, `styles.css`, `script.js`, `.nojekyll`, `README.md`, and the `assets/` directory to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch `main` and folder `/(root)`, then save.
6. Wait for the Pages deployment to finish. The site will be available at `https://YOUR_USERNAME.github.io/portfolio/`.

For a user site at `https://YOUR_USERNAME.github.io/`, the repository must be named exactly `YOUR_USERNAME.github.io`.

## Local preview

Open `index.html` directly in a browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

```text
.
├── assets/
│   └── favicon.svg
├── .nojekyll
├── index.html
├── script.js
├── styles.css
└── README.md
```

## Notes

- Uses Google Fonts for Manrope, DM Mono, and Instrument Serif. System fallbacks are included.
- No server-side code, API keys, secrets, or build dependencies.
- This is a static portfolio; contact uses a `mailto:` link.
