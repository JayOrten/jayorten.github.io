# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic portfolio/research website built with Jekyll and hosted on GitHub Pages at https://jayorten.github.io/

## Build & Development Commands

```bash
# Install Ruby dependencies
bundle install

# Serve locally with auto-rebuild (http://localhost:4000)
bundle exec jekyll serve

# Build static site to _site/
bundle exec jekyll build
```

## Deployment

Push to `main` branch → GitHub Pages automatically rebuilds and deploys.

## Architecture

Jekyll static site generator converts Markdown content + HTML templates into a static site.

### Directory Structure

```
├── _config.yml          # Site config: name, markdown processor, permalinks, collections
├── _layouts/
│   ├── default.html     # Base layout: nav, footer, content wrapper
│   ├── post.html        # Blog/research post layout (date + content)
│   └── review.html      # Review layout (date + tags + content)
├── _includes/
│   └── header.html      # <head> tag: meta, favicon, CSS, fonts, Font Awesome, Google Analytics
├── _posts/              # Research/blog posts (YYYY-MM-DD-title.md)
├── _reviews/            # Review posts (YYYY-MM-DD-title.md), uses `reviews` collection
├── blog/index.html      # Research listing page (bento grid)
├── reviews/index.html   # Reviews listing page (bento grid with tag pills)
├── index.html           # Home page (profile + blurb)
├── css/styles.css       # All styles (Catppuccin Frappe palette, single file)
├── js/fun.js            # Interactive features (3D tilt, constellation, Konami code)
├── assets/              # Images, PDFs, favicons
│   ├── blog/            # Images published from ~/org/posts/images/
│   └── reviews/         # Images published from ~/org/reviews/images/
└── CV/                  # CV page
```

### Content Collections

**Blog/Research (`_posts/`):**
- Permalink: `/blog/:year/:month/:day/:title`
- Layout: `post`
- Frontmatter: `layout`, `title`, `date`, `description`, `icon` (Font Awesome class)

**Reviews (`_reviews/`):**
- Permalink: `/reviews/:year/:month/:day/:title`
- Layout: `review`
- Frontmatter: `layout`, `title`, `date`, `tags` (array), `description`, `icon` (Font Awesome class)
- Tags are freeform strings (e.g., `movie`, `book`, `album`, `tv`) rendered as pills

### Navigation

Defined in `_layouts/default.html` nav bar:
- Home (`/`)
- Research (`/blog`)
- Reviews (`/reviews`)

### Styling

- **Palette:** Catppuccin Frappe (CSS custom properties in `:root`)
- **Fonts:** Alegreya (body), Roboto (UI), Roboto Mono (code/dates/tags)
- **Icons:** Font Awesome 6.5.1 via CDN
- **Background:** CSS star field with twinkle animation
- **Layout:** Flexbox, 50% width centered (responsive breakpoints at 900px and 500px)

### Interactive Features (`js/fun.js`)

- 3D tilt on profile photo (mousemove)
- Constellation canvas (stars connect near cursor)
- Konami code easter egg (rocket shower)

## Org-mode Publishing Pipeline

Content can be authored as org files in `~/org/` and published to this repo via Emacs.

| Org source | Jekyll destination | Image assets |
|---|---|---|
| `~/org/posts/*.org` | `_posts/` | `assets/blog/` |
| `~/org/reviews/*.org` | `_reviews/` | `assets/reviews/` |

**Publish command:** `SPC n j` or `M-x my/org-jekyll-publish` in Emacs.

The custom publish function (`my/org-jekyll-publish-to-md` in Doom config) handles:
- Generating YAML frontmatter from org keywords (`#+TITLE:`, `#+DATE:`, `#+DESCRIPTION:`, `#+ICON:`, `#+LAYOUT:`, `#+JEKYLL_TAGS:`)
- Exporting org body to GitHub-flavored markdown via `ox-md`
- Rewriting image paths (`images/foo.png` → `/assets/blog/foo.png` or `/assets/reviews/foo.png`)
- Naming output files as `YYYY-MM-DD-slug.md`

Full authoring docs: `~/org/ORG-PUBLISHING.org`

## Key Conventions

- Post/review filenames must follow `YYYY-MM-DD-title.md` format (generated automatically from org publish)
- Blog posts use `layout: post`, reviews use `layout: review`
- Both listing pages use the bento grid card style
- Google Analytics tracking ID: G-MVGDZ53SL2
- Catppuccin Frappe colors are used everywhere — don't introduce colors outside the palette
