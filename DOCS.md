# Site Documentation

Quick reference for how this site works and how to add content.

## How It Works

This is a [Jekyll](https://jekyllrb.com/) static site hosted on GitHub Pages. You write content in Markdown files with YAML frontmatter at the top, push to `main`, and GitHub builds + deploys automatically.

## Local Development

```bash
bundle install              # first time only
bundle exec jekyll serve    # http://localhost:4000, auto-rebuilds on save
```

## Adding a Research/Blog Post

1. Create a file in `_posts/` named `YYYY-MM-DD-your-title.md`
2. Add this frontmatter at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-02-10
description: "Short blurb that appears on the card."
icon: "fa-solid fa-brain"
---
```

3. Write your content in Markdown below the `---`
4. Push to `main`

The post will appear on the Research page at `/blog/2026/02/10/your-title`.

### Finding Icons

Browse [Font Awesome](https://fontawesome.com/icons) for icon classes. Use the `fa-solid fa-*` format.

## Adding a Review

1. Create a file in `_reviews/` named `YYYY-MM-DD-your-title.md`
2. Add this frontmatter:

```yaml
---
layout: review
title: "Thing You're Reviewing"
date: 2026-02-10
tags: [movie, sci-fi]
description: "Short blurb for the card."
icon: "fa-solid fa-film"
---
```

3. Write your review in Markdown below the `---`
4. Push to `main`

### Tags

Tags are freeform — use whatever makes sense. They render as small pills on both the listing page and the individual review. Some ideas:

| Tag       | Icon suggestion          |
|-----------|--------------------------|
| `movie`   | `fa-solid fa-film`       |
| `book`    | `fa-solid fa-book`       |
| `album`   | `fa-solid fa-compact-disc` |
| `tv`      | `fa-solid fa-tv`         |
| `game`    | `fa-solid fa-gamepad`    |

You can use multiple tags: `tags: [book, sci-fi, favorite]`

## File Structure

| Path                  | What it does                                    |
|-----------------------|-------------------------------------------------|
| `_config.yml`         | Site settings, collections, permalinks          |
| `_layouts/`           | HTML templates that wrap your content            |
| `_includes/header.html` | The `<head>` tag (fonts, analytics, CSS)      |
| `_posts/`             | Research/blog Markdown files                     |
| `_reviews/`           | Review Markdown files                            |
| `css/styles.css`      | All styles (Catppuccin Frappe color palette)     |
| `js/fun.js`           | Interactive features (constellation, Konami code)|
| `assets/`             | Images, PDFs                                     |
| `index.html`          | Home page                                        |
| `blog/index.html`     | Research listing page                            |
| `reviews/index.html`  | Reviews listing page                             |

## Theme & Colors

The site uses the [Catppuccin Frappe](https://catppuccin.com/) palette. All colors are defined as CSS variables in `css/styles.css`. Stick to these when adding styles — don't hardcode hex values.

## Easter Egg

Konami code (up up down down left right left right B A) triggers a rocket shower. You're welcome.
