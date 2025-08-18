<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  deploythis.github.io – Personal Site
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

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
