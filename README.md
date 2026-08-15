# Kshitiz Maskey Jekyll theme

A standalone, lightweight Jekyll site matching the plain HTML reference in `KshitizWebsite_Final_Plain_HTML/`. It ships plain HTML, Liquid, and CSS; React and Tailwind are not runtime dependencies.

## Run locally

```sh
bundle install
bundle exec jekyll serve --livereload
```

Open `http://127.0.0.1:4000/`.

## Structure

- `_layouts/` own page chrome: `home`, `profile`, `expertise`, `contact`, `page`, `post`, `case-study`, `default`.
- `_includes/` contains reusable hero, visual-panel, image-block, and call-to-action (footer-cta) components.
- Page and post copy lives in the root `*.md` files and `_posts/`; hero copy, meta rows, visual panels, and CTAs are driven by front matter.
- `assets/css/main.css` implements the reference design system (`.container`, `.hero-grid`, `.split`, `.grid-2`, `.grid-3`, `.card`, `.blog-card`, `.note-card`, `.footer-cta`, etc.).

## Reusing a design

Copy a file from `_templates/` into the site root or `_posts/`, rename it, and replace its front matter and sample content. Article images live in `assets/images/` and are wired in with the `image-block` include or an `image` front matter value.

The plain HTML reference folder is excluded from the build and is kept only as source documentation.
