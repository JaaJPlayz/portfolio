# Hiago Augusto — Portfolio

A responsive, dark editorial-style portfolio for Hiago Augusto, a full-stack web and RPA developer based in Brazil. Built with plain HTML, CSS, and JavaScript; no build step or package manager is required.

## Publish on GitHub Pages

1. Open the `JaaJPlayz/portfolio` repository on GitHub.
2. Upload the **contents** of this ZIP to the repository root (not the enclosing folder). Ensure `index.html`, `styles.css`, `script.js`, `.nojekyll`, `README.md`, and `assets/` are at the top level.
3. Commit the changes to `main`, or create a branch and open a pull request.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
6. Once deployment completes, the portfolio should be available at https://jaajplayz.github.io/portfolio/.

## Local preview

Open `index.html` in a browser, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Content notes

- The selected-work section links to three public repositories: Trybe Futebol Clube, Recipes App, and Car Image Scraper.
- The skills section lists technologies associated with Hiago's broader experience and interests, not necessarily every project's stack.
- Contact links point to GitHub and LinkedIn. No placeholder email address is included.
- The site uses Google Fonts with fallback fonts and works without a JavaScript build pipeline.

## Files

```text
.
├── .nojekyll
├── README.md
├── index.html
├── script.js
├── styles.css
└── assets/
    └── favicon.svg
```
