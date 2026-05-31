# My Web Assignments — Project

A small, static web project containing a homepage, a blog page, and supporting assets. This repository is a concise demonstration of a front-end assignment using HTML, Tailwind CSS configuration, and plain JavaScript modules.

**Status**: Production-ready static files — open locally or serve with a simple static server.

**Contents**
- **Overview:** A brief project summary and purpose.
- **Getting Started:** How to run the site locally.
- **Project Structure:** Key files and directories.
- **Development:** Optional build steps and tooling notes.
- **Contributing & License:** How to contribute and reuse.

**Quick Links**
- **Homepage:** `index.html`
- **Blog page:** `blog.html`

**Preview**
Open `index.html` in a browser or run a local static server (see Getting Started).

**Getting Started**

Prerequisites:
- A modern web browser.
- (Optional) `node` / `npm` if you plan to rebuild Tailwind assets or run a local dev server.

Run locally (simple):

1. Open the project folder in your file manager and double-click `index.html`.
2. Or serve the folder with a simple HTTP server:

```
python -m http.server 8000
```

or with `live-server`:

```
npm install -g live-server
live-server
```

Development (Tailwind rebuilds):

If you modify Tailwind source files and need to rebuild CSS, use your preferred Tailwind workflow. A minimal command (requires a Tailwind setup) is:

```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Adjust input/output paths to match your project if you add a Tailwind build step.

**Project Structure**

- `index.html`: Main landing page.
- `blog.html`: Blog or secondary content page.
- `assets/`: Images, fonts, and other static media.
- `js/`: JavaScript modules including `donation.js` and `shared.js`.
- `tailwind.config.js`: Tailwind CSS configuration (optional — used if you compile Tailwind).

**Built With**

- HTML, CSS
- JavaScript
- Tailwind CSS (configuration present; build step optional)

**Usage**

- Navigation is static — link between `index.html` and `blog.html`.
- Scripts in `js/` are plain ES modules; include them with `<script type="module" src="js/shared.js"></script>` or similar.

**Contributing**

- Fork the repository, create a feature branch, and open a pull request.
- Keep changes focused and include a short description of what you changed.

**Contact**

If you want help or improvements, open an issue or contact the maintainer listed in this repository.

---

## Live Demo

You can view the live demo of the website [Donate Bangladesh](https://mdashraful24.github.io/my-web-assignments05-repo/index.html).
