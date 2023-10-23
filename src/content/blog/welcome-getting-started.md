---
author: Sean Gore
datePublished: 2023-10-20T05:57:32.277Z
title: Getting Started
status: Published
tags:
    - tutorial
    - astro
description: "Tutorial for getting started with astro starter"
---

Thanks for choosing Astro starter. This is a template I've crafted for **accessible**, **semantic** HTML.

You will find the `index.astro` page intentionally empty. Astro starter is intentionally bare-bones, with the bare minimum you need to get started on a basic blog website.

* [x] vanilla CSS
* [x] zero-JS minus the `ViewTransitions` API
* [x] shorthand `import` statements
* [x] accessible navigation components, pre-integrated with Astro's active page via `aria-current`
* [x] optimized images via `srcset`, even in `.md` files
* [x] one single layout to rule them all
* [x] `.astro` files and **only** `.astro` files. You might find some `.ts` files lying around, but Astro kind of forces that on you 🤷
* [x] [Netlify](https://netlify.com) integration for SSR out of the box (if you don't want this, then remove the `netlify` adapter)

## Table of Contents

## Markdown Features

* If you include the text "Table of Contents" as a heading in your markdown documents, then `remark` will automatically generate a table of contents for you like this.
* Custom markdown theme

## Directory Structure

Use the standard Astro directory structure, except for a few differences:

1. `utils` folder for utilities. If you have `function`s that you want to re-use in other places (server-side), then you put them here
2. `content/blog` folder for blog posts. You can, of course, repurpose the `config.ts` file to add other content collections
3. `config.ts` file for **global** site configuration such as the `title` and `description` `<meta>` tags

### `import` shorthands

`import`s become more refactorable because we don't have to use relative paths.

| Shorthand     | Path               |
|---------------|--------------------|
| `@components` | `./src/components` |
| `@utils`      | `./src/utils`      |   
| `@contexts`   | `./src/contexts`   |
| `@hooks`      | `./src/hooks`      |
| `@styles`     | `./src/styles`     |
| `@assets`     | `./src/assets`     |
| `@pages`      | `./src/pages`      |

## Included Components

Astro starter includes basic components for navigation and blog posts. Feel free to remove these components if you don't need them.

| Component                         | Purpose                                                                                  |
|-----------------------------------|------------------------------------------------------------------------------------------|
| `blog/Post.astro`                 | A **full** post                                                                          |
| `blog/PostHeader.astro`           | Just the post's header, including post metadata                                          |
| `blog/PostList.astro`             | A list of posts                                                                          |
| `blog/PostMeta.astro`             | All metadata of a post                                                                   |
| `navigation/Navigation.astro`     | Container element for navigation (`<nav>`).  Used in conjunction with `<NavigationLink>` |
| `navigation/NavigationLink.astro` | Navigation link that sets `aria-current` appropriately depending on the active page      |
| `Footer.astro`                    | Basic component for the site footer                                                      |
| `FormattedDate.astro`             | Dynamic `<time>` element                                                                 |
| `Header.astro`                    | Basic component for the site header.  Includes basic navigation.                         |

## Getting Started

1. Initiate a new Astro project with the template:
    ```bash
    git clone https://github.com/srsgores/astro-starter 
    ```
2. Update `config.ts` with your project settings
3. (Optional): install `astro-icon`:
    ```bash
    npm install astro-icon
    ```

Out of the box, your images will be served responsively. You can remove this file or repurpose the files in `content` to your liking if you don't want a blog.

## Conclusion

This is just one starting point of many. Astro users enjoy the framework because of its versatility