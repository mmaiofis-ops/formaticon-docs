# Formaticon Documentation

User instruction manual for [Formaticon](https://formaticon.cellformatica.com) — the AI-powered bioscience research platform by [Cellformatica](https://cellformatica.com).

Published at: **https://bmyury.github.io/formaticon-docs**

## Contents

- **Overview** — what Formaticon is and how to choose a workflow
- **Getting Started** — account creation, credits, billing
- **Batch Query** — screening entity lists against a research question
- **Detailed Report** — multi-section narrative analysis for gene panels
- **Bioscientist Agent** — autonomous deep-research pipeline producing PDF white papers
- **Reading Your Results** — interpreting tables, reports, PRISMA, hypotheses, citations
- **History, Sharing & Billing** — managing past runs, sharing links, adding credits
- **FAQ** — common questions across all workflows

## Tech stack

Pure HTML/CSS/JS — no build tools. Served statically via GitHub Pages.

## Local development

```bash
python3 -m http.server 8080
# Then open http://localhost:8080/formaticon-docs/
```

Do not open HTML files directly via `file://` — root-relative paths (`/formaticon-docs/...`) require an HTTP server.

## Deployment

Automatic via GitHub Actions on push to `main`. See `.github/workflows/deploy.yml`.

In GitHub repo Settings → Pages, set Source to **GitHub Actions**.

## Adding screenshots

Replace placeholder `<div class="screenshot-placeholder">` elements with:
```html
<img src="/formaticon-docs/img/screenshots/filename.png" alt="Description" onerror="this.style.display='none'">
```

Screenshots belong in `img/screenshots/`. See the placeholder comments in each HTML file for the expected filenames.
