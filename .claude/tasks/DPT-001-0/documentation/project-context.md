# Project Context Analysis - DPT-001-0

## Technology Stack

### Core Framework
- **Gatsby 5.7.0**: Static site generator with React
- **React 18.2.0**: Component-based UI framework
- **Node.js**: JavaScript runtime environment

### Build Tools & Dependencies
- **gatsby-plugin-mdx 5.7.0**: MDX support for markdown with JSX
- **gatsby-plugin-sass 6.7.0**: Sass/SCSS styling support
- **gatsby-source-filesystem 5.7.0**: File system sourcing
- **gatsby-plugin-image 3.7.0**: Optimized image processing
- **gatsby-plugin-sharp 5.7.0**: Image transformation
- **gatsby-transformer-sharp 5.7.0**: Sharp image processing
- **framer-motion 12.23.12**: Animation library

### Deployment
- **GitHub Pages**: Static hosting via `gh-pages 5.0.0`
- **CNAME**: Custom domain `deploythis.co`

## Project Structure

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
│   ├── index.js        # Home page (hardcoded content)
│   └── cv.js           # Experience page
└── styles/              # CSS styling
    ├── fonts.css       # Typography
    └── global.css      # Global styles
```

## Current Architecture Patterns

### Content Management
- **Current State**: Hardcoded content within React components
- **Content Types**: Personal bio, skills, experience, contact information
- **SEO Handling**: Custom head component for metadata

### Styling Approach
- **CSS Architecture**: Global CSS with component-specific classes
- **Typography**: Custom font loading via CSS
- **Responsive Design**: Container-based layout system
- **Animation**: Framer Motion for component animations

### Component Structure
- **Functional Components**: React hooks pattern
- **Export Pattern**: Default exports with named Head exports
- **File Organization**: Co-located components and pages

## Build & Deployment Process

### Development Workflow
```bash
npm run develop    # Development server
npm run build     # Production build
npm run serve     # Serve built site
npm run clean     # Clean cache
```

### Deployment
- **Target**: GitHub Pages
- **Domain**: Custom domain via CNAME
- **Build Tool**: gh-pages package for deployment

## Content Analysis

### Current Content Location
- **Home Page** (`src/pages/index.js`):
  - Hero section with title/subtitle
  - About section with bio and skills
  - Contact information
- **CV Page** (`src/pages/cv.js`): Experience content (needs analysis)

### Content Types Identified
1. **Personal Information**: Name, title, bio
2. **Skills & Focus Areas**: Technical skills list
3. **Contact Details**: Email, LinkedIn, social links
4. **Experience Data**: Professional history
5. **Site Metadata**: Title, description, social tags

## Integration Points

### Gatsby Configuration
- **Site Metadata**: Title, URL configuration
- **Plugin Chain**: Image processing, MDX, Sass, manifest
- **File Sources**: Images and pages currently configured

### SEO & Metadata
- **Head Component**: Centralized SEO management
- **Manifest Plugin**: PWA configuration
- **Sitemap Plugin**: SEO optimization

## Code Conventions

### JavaScript Patterns
- **ES6+ Syntax**: Arrow functions, template literals
- **React Patterns**: Functional components with hooks
- **Import Style**: Named and default imports
- **File Naming**: kebab-case for files, PascalCase for components

### Styling Conventions
- **CSS Classes**: BEM-like naming (e.g., `hero-title`, `contact-section`)
- **Global Styles**: Shared via global.css
- **Component Styles**: Inline via className attributes

## Quality & Testing

### Current Quality Gates
- **No explicit linting configuration found**
- **No testing framework detected**
- **No TypeScript configuration**

### Performance Considerations
- **Gatsby Optimizations**: Built-in image optimization, code splitting
- **Static Generation**: Pre-built pages for fast loading
- **CDN Ready**: GitHub Pages integration

## Constraints & Considerations

### Deployment Constraints
- **Static Site Only**: No server-side processing
- **GitHub Pages Limitations**: Jekyll processing, file size limits
- **Custom Domain**: CNAME configuration required

### Content Management Needs
- **Separation of Concerns**: Content should be externalized from code
- **Non-technical Updates**: Enable content changes without code modifications
- **Version Control**: Track content changes separately
- **Scalability**: Support for future content types (blog, portfolio)

## Recommended Approach for DPT-001-0

### Content Architecture Strategy
1. **Create `content/` directory** with structured markdown files
2. **Implement frontmatter schemas** for different content types
3. **Configure additional gatsby-source-filesystem** for content sourcing
4. **Migrate existing hardcoded content** to markdown format
5. **Update components** to use GraphQL queries for content

### Technical Implementation
- **Leverage existing MDX plugin** for enhanced markdown support
- **Maintain current styling approach** during content migration
- **Preserve SEO metadata** through frontmatter integration
- **Ensure GitHub Pages compatibility** throughout process