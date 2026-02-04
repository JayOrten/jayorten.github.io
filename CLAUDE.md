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

**Content flow:**
- Blog posts: `_posts/YYYY-MM-DD-title.md` (Markdown with YAML frontmatter)
- Layouts: `_layouts/` (default.html wraps all pages, post.html for blog posts)
- Includes: `_includes/header.html` (meta tags, analytics, CSS link)
- Styles: `css/styles.css` (single file, Flexbox-based)
- Static assets: `assets/images/`, `CV/pdf/`

**Configuration:** `_config.yml` sets site name, markdown processor (kramdown), permalink structure (`/blog/:year/:month/:day/:title`).

## Key Conventions

- Blog post filenames must follow `YYYY-MM-DD-title.md` format
- Posts require YAML frontmatter with `layout: post` and `title:`
- Google Fonts: Alegreya (body), Roboto/Roboto Mono (UI)
- Google Analytics tracking ID: G-MVGDZ53SL2
