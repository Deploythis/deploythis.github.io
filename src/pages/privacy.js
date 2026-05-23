import * as React from 'react'
import { Link, graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import HeadContent from '../components/_head'
import BeeLogo from '../components/BeeLogo'
import CookieConsentBanner from '../components/CookieConsent'
import '../styles/fonts.css'
import '../styles/global.css'

const PrivacyPage = ({ data }) => {
  const privacyContent = data.privacyContent
  const contactInfo = data.contactInfo.frontmatter

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="header" role="banner">
        <div className="container">
          <div className="logo">
            <span className="brand-highlight">{'{'}</span>Deploy/this
            <span className="brand-highlight">{'}'}</span>
          </div>
          <nav role="navigation" aria-label="Main navigation">
            <ul className="nav-links">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/cv">Experience</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main role="main" id="main-content">
        <section className="hero">
          <div className="container">
            <div className="hero-layout">
              <div className="hero-text">
                <h1 className="hero-title">{privacyContent.frontmatter.title}</h1>
                <p className="hero-subtitle">{privacyContent.frontmatter.subtitle}</p>
              </div>
              <div className="hero-logo">
                <BeeLogo size={120} className="floating-bee" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content-card">
              <ReactMarkdown>{privacyContent.rawMarkdownBody}</ReactMarkdown>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <h2 className="contact-title">Questions about privacy?</h2>
            <ul className="contact-links">
              <li>
                <a href={`mailto:${contactInfo.email}`} aria-label="Email Victor Hernandez">
                  Email
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Victor Hernandez on LinkedIn"
                >
                  {contactInfo.social.linkedin.label}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.social.bluesky.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Victor Hernandez on BlueSky"
                >
                  {contactInfo.social.bluesky.label}
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <p>
            📍 {contactInfo.location} | ✉️{' '}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> | 🌐{' '}
            <a href={contactInfo.social.linkedin.url} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{' '}
            | 🦋{' '}
            <a href={contactInfo.social.bluesky.url} target="_blank" rel="noopener noreferrer">
              BlueSky
            </a>
          </p>
        </div>
      </footer>
      <CookieConsentBanner />
    </>
  )
}

export default PrivacyPage

export const Head = ({ data }) =>
  HeadContent({
    title: data.privacyContent.frontmatter.seo?.title || 'Privacy Policy | Deploy/this',
    description:
      data.privacyContent.frontmatter.seo?.description ||
      'Privacy policy for deploythis.co - Learn how we collect, use, and protect your data.',
    pathname: '/privacy/',
    siteUrl: data.site.siteMetadata.siteUrl,
    siteName: 'Deploy/this',
    image: data.privacyContent.frontmatter.seo?.image || '/icons/icon-512x512.png',
  })

export const query = graphql`
  query PrivacyPageQuery {
    privacyContent: markdownRemark(
      frontmatter: { type: { eq: "page" } }
      fileAbsolutePath: { regex: "/content/pages/privacy/" }
    ) {
      frontmatter {
        title
        subtitle
        seo {
          title
          description
          image
        }
      }
      rawMarkdownBody
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
        siteUrl
      }
    }
  }
`
