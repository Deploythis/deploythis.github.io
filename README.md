<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Deploy/this – Victor Hernandez
</h1>
<p align="center">
  <em>Creative Technologist and Frontend Developer</em><br>
  <strong>deploythis.co</strong>
</p>

## 📋 About This Project

This is the personal portfolio website for Victor Hernandez, a Creative Technologist and Frontend Developer with 30+ years of experience. The site showcases professional experience, technical expertise, and serves as a bridge between creative vision and technical execution.

**Live Site**: [deploythis.co](https://deploythis.co)

## 🏗️ Technology Stack

### Core Framework
- **Gatsby 5.7.0** - Static site generator with React
- **React 18.2.0** - Component-based UI framework
- **Node.js** - JavaScript runtime environment

### Key Dependencies
- **gatsby-plugin-mdx 5.7.0** - MDX support for markdown with JSX
- **gatsby-plugin-sass 6.7.0** - Sass/SCSS styling support
- **gatsby-source-filesystem 5.7.0** - File system sourcing
- **gatsby-plugin-image 3.7.0** - Optimized image processing
- **framer-motion 12.23.12** - Animation library
- **gh-pages 5.0.0** - GitHub Pages deployment

## 🚀 Quick Start

1.  **Clone and install dependencies**
    ```shell
    git clone https://github.com/Deploythis/deploythis.github.io.git
    cd deploythis.github.io
    npm install
    ```

2.  **Start developing**
    ```shell
    npm run develop
    ```
    Your site is now running at `http://localhost:8000`!

3.  **View GraphQL data layer**
    Open `http://localhost:8000/___graphql` to explore the site's data structure.

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── _head.js         # SEO head component
│   └── BeeLogo.js       # Logo component with animation
├── images/              # Static image assets
│   ├── icon.png         # Site icon/favicon
│   └── logo.png         # Brand logo
├── pages/               # Gatsby page components
│   ├── 404.js          # Error page
│   ├── index.js        # Home page
│   └── cv.js           # Experience page
└── styles/              # CSS styling
    ├── fonts.css       # Typography
    └── global.css      # Global styles
```

## 📝 Content Management (DPT-001-0)

This project is undergoing migration from hardcoded content to a markdown-based content management system:

### Current Architecture
- Content is hardcoded within React components
- Direct JSX text embedding in page files
- Static contact information and experience data

### Target Architecture (In Progress)
```
content/
├── site/
│   └── metadata.md      # Site-level SEO and configuration
├── pages/
│   ├── home.md         # Homepage content (hero, about, skills)
│   └── cv.md           # Experience and education content
└── contact/
    └── info.md         # Contact details and social links
```

### Benefits of New Architecture
- **Separation of Concerns**: Content separate from presentation layer
- **Easy Updates**: Non-technical content updates via markdown files
- **GraphQL Integration**: Leverage Gatsby's built-in content optimization
- **Scalability**: Foundation for future content types (blog, portfolio)

## 🛠️ Development Commands

```shell
npm run develop    # Development server (http://localhost:8000)
npm run build     # Production build
npm run serve     # Serve built site locally
npm run clean     # Clean Gatsby cache and public folder
```

## 🎨 Code Conventions

### JavaScript Patterns
- **ES6+ Syntax**: Arrow functions, template literals
- **React Patterns**: Functional components with hooks
- **File Naming**: kebab-case for files, PascalCase for components

### Styling Conventions
- **CSS Classes**: BEM-like naming (`hero-title`, `contact-section`)
- **Global Styles**: Shared via `global.css`
- **Sass/SCSS**: Available for enhanced styling capabilities

## 🔍 SEO & Performance

- **Gatsby Image**: Automatic image optimization and lazy loading
- **Static Generation**: Pre-built pages for fast loading
- **SEO Components**: Centralized metadata management via `_head.js`
- **Sitemap**: Automatic sitemap generation
- **Manifest**: PWA configuration for mobile experience

## 🚀 Deployment (GitHub Pages via Actions)

This repository uses GitHub Actions to build and publish the Gatsby site to GitHub Pages (user site `deploythis.github.io`). The `main` branch contains only source code (no built `public/` directory committed). On every push to `main` a workflow builds the site and deploys the generated `public` folder.

### One-time setup steps performed
1. Added `.github/workflows/deploy.yml` with build + deploy jobs.
2. Ensured `.gitignore` excludes `public/` and build artifacts.
3. (After renaming) Set `main` as the default branch in repo settings.
4. In GitHub Pages settings: Source = GitHub Actions.

### Ongoing workflow
- Develop locally with `npm run develop`.
- Commit & push to `main`.
- GitHub Actions builds the site and publishes it. Deployment status appears in the PR / commit checks.

### Branch migration (if coming from old layout)
Previously the built site lived on `master` / `main`. That branch can be deleted once Pages serves from Actions successfully:

```
git push origin :master
```

### Custom domain
This site uses the custom domain `deploythis.co`. The file `static/CNAME` contains that domain so Gatsby copies it into each build output (`public/CNAME`). If you change domains, update that single file.

### Local production preview
```
npm run build && npm run serve
```

### Clearing caches
```
npm run clean
```

---
_Original Gatsby starter instructions retained below for reference._
