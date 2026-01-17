# Draczola ʕ•ᴥ•ʔ Bear Blog

[![Zola on GitHub Pages](https://github.com/siddhantladdha/draczola-bear/actions/workflows/zola.yml/badge.svg?branch=main)](https://github.com/siddhantladdha/draczola-bear/actions/workflows/zola.yml)
[![pages-build-deployment](https://github.com/siddhantladdha/draczola-bear/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/siddhantladdha/draczola-bear/actions/workflows/pages/pages-build-deployment)

🧸 A [Zola](https://www.getzola.org/)-theme based on [Bear Blog](https://bearblog.dev) now in [Dracula colors](https://draculatheme.com/)

> Free, no-nonsense, super-fast blogging.
> Dracula is a universal dark theme.

This theme is a fork of all the hardwork by [Alan Pearce and Contributors](https://codeberg.org/alanpearce/zola-bearblog). 

## Demo

[Github Pages Demo](https://siddhantladdha.com/draczola-bear/)

The [original theme](https://codeberg.org/alanpearce/zola-bearblog) has multiple demo sites, to provide examples of how to set up deployment.

TODO: Update instructions and illustrate forkability. 
## Screenshot

![Screenshot][screenshot]

When the user's browser is running »dark mode«, the dark color scheme will be used automatically. The default is the light/white color scheme. Check out the [`style.html`](https://codeberg.org/alanpearce/zola-bearblog/src/branch/main/templates/style.html)-file for the implementation.

## Installation

If you already have a Zola site on your machine, you can simply add this theme via

```
git submodule add https://codeberg.org/alanpearce/zola-bearblog themes/zola-bearblog
```

Then, adjust the `config.toml` as detailed below.

For more information, read the official [setup guide][zola-setup-guide] of Zola.

Alternatively, you can quickly deploy a copy of the theme site to Netlify using this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://gitlab.com/alanpearce/zola-bearblog)

(Note that this method makes it harder to keep up-to-date with theme updates, which might be necessary for newer versions of Zola.)

## Adjust configuration / config.toml

Please check out the included [config.toml](https://codeberg.org/alanpearce/zola-bearblog/src/branch/main/config.toml)

## Content & structure

### Menu

Create an array in `extra` with a key of `main_menu`. `url` is passed to [`get_url`](https://www.getzola.org/documentation/templates/overview/#get-url)

```toml
[[extra.main_menu]]
name = "Home"
url = "@/_index.md"

[[extra.main_menu]]
name = "Bear"
url = "@/bear.md"

[[extra.main_menu]]
name = "Zola"
url = "@/zola.md"

[[extra.main_menu]]
name = "Blog"
url = "@/blog/_index.md"
```

### Adding / editing content

#### Index-Page

The contents of the `index`-page may be changed by editing your `content/_index.md`-file.


### Adding your branding / colors / css

Add a `custom_head.html`-file to your `templates/`-directory. In there you may add a `<style>`-tag, *or* you may add a `<link>`-tag referencing your own `custom.css` (in case you prefer to have a separate `.css`-file). Check out the [`style.html`](https://codeberg.org/alanpearce/zola-bearblog/src/branch/main/templates/style.css.html)-file to find out which CSS-styles are applied by default.

### Table of contents

Table of contents are not rendered by default. To render them, set `extra.table_of_contents.show = true` in `config.toml`.

The table of contents is rendered inside a `details` element.
If you want the section to be collapsed on page load, set `extra.table_of_contents.visible_on_load = false`.
This defaults to `true`.

In addition, `extra.table_of_contents.max_level` can limit the maximum level of headers to show.
To show only `h1`s, set `max_level = 1`, to show `h1`s and `h2`s, set `max_level = 2`, and so on.
By default, `max_level` is set to 6, so all headers on the page are shown.

Below is an example of how to configure the table of contents in `config.toml`.

```toml
[extra.table_of_contents]
show = true
max_level = 2
visible_on_load = false
```

It can also be toggled on page-by-page basis. Add `extra.hide_table_of_contents = true` to the page's frontmatter to hide the table of contents for that specific page.

## Issues / Feedback / Contributing
Please use [Codeberg issues](https://codeberg.org/alanpearce/zola-bearblog/issues) and [Pull Requests](https://codeberg.org/alanpearce/zola-bearblog/pulls).

## Special Thanks 🎁

A special thank you goes out to [Herman](https://herman.bearblog.dev), for creating the original [ʕ•ᴥ•ʔ Bear Blog](https://bearblog.dev/) and [Jan Raasch](https://www.janraasch.com) for creating the hugo port of the Bear Blog theme.

[Gist for MathJax support](https://gist.github.com/mathwo/4958a7e50be85743615c18d9e34109e9)

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Alan Pearce](https://www.alanpearce.eu/)

[zola-setup-guide]: https://www.getzola.org/documentation/getting-started/installation/
[screenshot]: https://codeberg.org/alanpearce/zola-bearblog/raw/branch/main/screenshot.png
