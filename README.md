# Draczola ʕ•ᴥ•ʔ Bear Blog

[![Deploy Zola site to Pages](https://github.com/siddhantladdha/draczola-bear/actions/workflows/zola-minimal.yml/badge.svg)](https://github.com/siddhantladdha/draczola-bear/actions/workflows/zola-minimal.yml)

🧸 A [Zola](https://www.getzola.org/)-theme based on [Bear Blog](https://bearblog.dev) now in [Dracula colors](https://draculatheme.com/)

> Free, no-nonsense, super-fast blogging.

> Dracula is a universal dark theme.

# Demo

[Github Pages Demo](https://siddhantladdha.com/draczola-bear/)

The [original theme](https://codeberg.org/alanpearce/zola-bearblog) has multiple demo sites, to provide examples of how to set up deployment.

# Features

- **Code Block Copy Button**: One-click copying of code snippets to clipboard. Enable by setting `copy_button = true` in the `[extra.table_of_contents]` section of your `config.toml`:
  ```toml
  [extra.table_of_contents]
  show = true
  max_level = 3
  visible_on_load = false
  copy_button = true
  ```

# Thank you!

A special thank you goes out to 
- [Herman](https://herman.bearblog.dev) for creating the original [ʕ•ᴥ•ʔ Bear Blog](https://bearblog.dev/)
- [Jan Raasch](https://www.janraasch.com) for creating the hugo port of the Bear Blog theme.
- [Alan Pearce and Contributors](https://codeberg.org/alanpearce/zola-bearblog) for creating the zola port of the Hugo theme, which I used as the base for this fork.
- [This gist](https://gist.github.com/mathwo/4958a7e50be85743615c18d9e34109e9) and [MATBook Zola theme](https://github.com/srliu3264/MATbook) for MathJax support.
- [Terminus theme](https://github.com/ebkalderon/terminus) for the copy-to-clipboard JavaScript implementation.

# License

[MIT License](./LICENSE)
