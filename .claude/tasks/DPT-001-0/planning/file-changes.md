# File Change Mapping - DPT-001-0

## Overview
Detailed file-by-file implementation guide for migrating from hardcoded content to markdown-based content management system.

## Phase 1: Content Architecture Setup

### New Directory Structure
```
content/
├── site/
│   └── metadata.md          # Site-level SEO and configuration
├── pages/
│   ├── home.md             # Homepage content (hero, about, skills)
│   └── cv.md               # Experience and education content
└── contact/
    └── info.md             # Contact details and social links
```

### Configuration Changes

#### File: `gatsby-config.js`
**Action**: Modify existing configuration
**Location**: Lines 31-37 (after existing gatsby-source-filesystem configurations)

**Changes Required**:
```javascript
// ADD after existing gatsby-source-filesystem for pages (line 36)
}, {
  resolve: 'gatsby-source-filesystem',
  options: {
    "name": "content",
    "path": "./content/"
  },
  __key: "content"
```

**Enhanced siteMetadata** (Lines 5-8):
```javascript
// REPLACE existing siteMetadata
siteMetadata: {
  title: `Deploy/this - Victor Hernandez`,
  siteUrl: `https://www.deploythis.co`,
  description: `Creative Technologist and Frontend Developer bridging technical execution with strategic vision`,
  author: `Victor Hernandez`,
  email: `victor@deploythis.co`,
  location: `Brookline, MA`,
  social: {
    linkedin: `https://www.linkedin.com/in/victorhernandezduran`,
    bluesky: `https://bsky.app/profile/deploythis.bsky.social`
  }
}
```

## Phase 2: Content Migration

### Content Files Creation

#### File: `content/site/metadata.md`
**Action**: Create new file
```markdown
---
title: "Deploy/this - Victor Hernandez"
description: "Creative Technologist and Frontend Developer bridging technical execution with strategic vision"
siteUrl: "https://www.deploythis.co"
author: "Victor Hernandez"
email: "victor@deploythis.co"
location: "Brookline, MA"
social:
  linkedin: "https://www.linkedin.com/in/victorhernandezduran"
  bluesky: "https://bsky.app/profile/deploythis.bsky.social"
seo:
  keywords: ["Frontend Development", "React", "JavaScript", "Creative Technology", "Performance Optimization"]
  image: "/images/icon.png"
---

# Site Metadata

This file contains site-level configuration and SEO metadata for the Deploy/this website.
```

#### File: `content/pages/home.md`
**Action**: Create new file
**Source**: Extract from `src/pages/index.js` lines 31-67

```markdown
---
type: "page"
title: "Frontend Developer / Creative Technologist"
subtitle: "I am the bridge between creative vision and technical reality. My role is to translate \"what if\" ideas into a clear \"how-to\" roadmap, helping teams execute with confidence."
name: "Victor Hernandez"
role: "Creative Technologist and Frontend Developer"
experience: "30 years of experience"
bio: "Hi, I'm **Victor Hernandez**, a Creative Technologist and Frontend Developer who bridges technical execution with strategic vision."
description: "I specialize in **translating between creative vision and technical reality** – helping teams move from \"what if\" to \"how to\" with clarity and confidence. With over 30 years of experience across software engineering, digital transformation, and creative technology, I bring a unique perspective to building **scalable, user-friendly, and high-performance applications**."
vision: "My vision combines **30 years of technology evolution experience** with current AI-era opportunities to reskill further in React and JavaScript frameworks, upskill in Web Security, deepen expertise in Performance and Usability, and integrate AI to deliver smarter, more engaging user experiences."
skills:
  - "Frontend Development"
  - "React & JavaScript frameworks"
  - "Performance optimization"
  - "Web Security & Accessibility"
  - "AI & Emerging Technologies"
  - "Digital Strategy"
seo:
  title: "Victor Hernandez - Frontend Developer & Creative Technologist"
  description: "Creative Technologist bridging technical execution with strategic vision. 30+ years experience in React, JavaScript, and performance optimization."
---

# About Victor Hernandez

Frontend Developer and Creative Technologist specializing in translating creative vision into technical reality.
```

#### File: `content/pages/cv.md`
**Action**: Create new file
**Source**: Extract from `src/pages/cv.js` (needs analysis of CV page content)

```markdown
---
type: "page"
title: "Experience & Background"
subtitle: "Professional history and technical expertise"
updated: "2024-09-16"
experience:
  - title: "Senior Frontend Developer"
    company: "Previous Role"
    period: "2020-Present"
    description: "Led frontend development initiatives..."
  - title: "Technical Lead"
    company: "Previous Company"
    period: "2018-2020"
    description: "Managed technical strategy..."
skills:
  technical:
    - "React & JavaScript ES6+"
    - "TypeScript"
    - "Node.js"
    - "GraphQL"
    - "Performance Optimization"
  tools:
    - "Git & GitHub"
    - "Webpack & Build Tools"
    - "Testing Frameworks"
    - "CI/CD Pipelines"
education:
  - degree: "Computer Science"
    institution: "University Name"
    year: "Year"
certifications:
  - name: "React Certification"
    issuer: "Organization"
    year: "2023"
---

# Professional Experience

Detailed professional background and technical expertise.
```

#### File: `content/contact/info.md`
**Action**: Create new file
**Source**: Extract from `src/pages/index.js` lines 78-81

```markdown
---
type: "contact"
email: "victor@deploythis.co"
location: "Brookline, MA"
social:
  linkedin:
    url: "https://www.linkedin.com/in/victorhernandezduran"
    label: "LinkedIn"
  bluesky:
    url: "https://bsky.app/profile/deploythis.bsky.social"
    label: "BlueSky"
message: "Have a project in mind?"
---

# Contact Information

Get in touch for project collaboration and opportunities.
```

## Phase 3: Component Integration

### Component Modifications

#### File: `src/pages/index.js`
**Action**: Major refactoring with GraphQL integration

**Import Changes** (Add after line 6):
```javascript
import { graphql } from "gatsby"
```

**Component Function Modification** (Replace line 8):
```javascript
// REPLACE: const IndexPage = () => {
const IndexPage = ({ data }) => {
  const homeContent = data.homeContent.frontmatter
  const contactInfo = data.contactInfo.frontmatter
```

**Hero Section Replacement** (Lines 31-34):
```javascript
// REPLACE hardcoded content with:
<h1 className="hero-title">
  {homeContent.title}
</h1>
<p className="hero-subtitle">{homeContent.subtitle}</p>
```

**About Section Replacement** (Lines 48-56):
```javascript
// REPLACE hardcoded content with:
<p>
  Hi, I'm <strong>{homeContent.name}</strong>, a {homeContent.role} who bridges technical execution with strategic vision.
</p>
<p>
  {homeContent.description}
</p>
<p>
  {homeContent.vision}
</p>
```

**Skills Section Replacement** (Lines 60-67):
```javascript
// REPLACE hardcoded skills list with:
<ul>
  {homeContent.skills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ))}
</ul>
```

**Contact Section Replacement** (Lines 78-81):
```javascript
// REPLACE hardcoded contact links with:
<li><a href={`mailto:${contactInfo.email}`}>Email</a></li>
<li><a href={contactInfo.social.linkedin.url} target="_blank" rel="noopener noreferrer">{contactInfo.social.linkedin.label}</a></li>
<li><a href={contactInfo.social.bluesky.url} target="_blank" rel="noopener noreferrer">{contactInfo.social.bluesky.label}</a></li>
```

**Footer Section Replacement** (Lines 87-89):
```javascript
// REPLACE hardcoded footer with:
<p>📍 {contactInfo.location} | ✉️ <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> | 🌐 <a href={contactInfo.social.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a> | 🦋 <a href={contactInfo.social.bluesky.url} target="_blank" rel="noopener noreferrer">BlueSky</a></p>
```

**GraphQL Page Query** (Add at end of file):
```javascript
export const query = graphql`
  query HomePageQuery {
    homeContent: markdownRemark(
      frontmatter: { type: { eq: "page" } }
      fileAbsolutePath: { regex: "/content/pages/home/" }
    ) {
      frontmatter {
        title
        subtitle
        name
        role
        description
        vision
        skills
      }
    }
    contactInfo: markdownRemark(
      frontmatter: { type: { eq: "contact" } }
      fileAbsolutePath: { regex: "/content/contact/" }
    ) {
      frontmatter {
        email
        location
        social {
          linkedin {
            url
            label
          }
          bluesky {
            url
            label
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
```

#### File: `src/pages/cv.js`
**Action**: Requires analysis of existing CV page content first

**Analysis Needed**:
1. Read current `src/pages/cv.js` content structure
2. Identify hardcoded experience, skills, and education data
3. Plan GraphQL query structure for CV content
4. Design component modifications for content consumption

#### File: `src/components/_head.js`
**Action**: Enhance for dynamic SEO metadata

**Component Modification**:
```javascript
// Modify to accept props for dynamic content
const HeadContent = ({ title, description, location = "/" }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    // ... rest of existing meta tags
  </>
)
```

**Export Modification** (in page files):
```javascript
export const Head = ({ data }) => HeadContent({
  title: data.homeContent.frontmatter.seo?.title || data.site.siteMetadata.title,
  description: data.homeContent.frontmatter.seo?.description || data.site.siteMetadata.description
});
```

## Phase 4: Testing and Validation

### Testing Requirements

#### Build Process Validation
```bash
# Commands to run for validation
npm run clean
npm run build
npm run serve
```

#### Performance Testing
- Lighthouse audit before and after
- Bundle size comparison
- Build time measurement

#### Content Validation
- Visual comparison of rendered content
- SEO metadata verification
- Cross-browser testing

### Quality Assurance Checklist

#### Functional Testing
- [ ] Homepage renders correctly with markdown content
- [ ] CV page displays experience data properly
- [ ] Contact information displays correctly
- [ ] Navigation functions as before
- [ ] Animations and styling preserved

#### Performance Testing
- [ ] Lighthouse scores within 5% of baseline
- [ ] Page load times maintained
- [ ] Build process completes successfully
- [ ] Bundle size unchanged or reduced

#### SEO Testing
- [ ] Meta tags render dynamically
- [ ] Open Graph data correct
- [ ] Site metadata properly configured
- [ ] Search engine optimization maintained

#### Deployment Testing
- [ ] GitHub Pages deployment successful
- [ ] Custom domain resolution working
- [ ] All pages accessible via HTTPS
- [ ] CDN caching functioning properly

## Implementation Notes

### Content Editing Workflow
1. Edit markdown files in `content/` directory
2. Commit changes to git repository
3. GitHub Pages automatically rebuilds and deploys
4. Changes visible within 2-5 minutes

### Backup Strategy
- Git history provides complete rollback capability
- Original hardcoded content preserved in git history
- Content files can be restored individually if needed

### Future Expansion Points
- `content/blog/` for future blog posts
- `content/projects/` for portfolio items
- `content/testimonials/` for client feedback
- Enhanced frontmatter schemas for new content types