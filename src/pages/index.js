import * as React from "react"
import { Link, graphql } from "gatsby"
import HeadContent from "../components/_head"
import BeeLogo from "../components/BeeLogo"
import "../styles/fonts.css"
import "../styles/global.css"

const IndexPage = ({ data }) => {
  const homeContent = data.homeContent.frontmatter
  const contactInfo = data.contactInfo.frontmatter
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="brand-highlight">{"{"}</span>Deploy/this<span className="brand-highlight">{"}"}</span>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/" className="active">About</Link></li>
              <li><Link to="/cv">Experience</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-layout">
              <div className="hero-text">
                <h1 className="hero-title">
                  {homeContent.title}
                </h1>
                <p className="hero-subtitle">{homeContent.subtitle}</p>
              </div>
              <div className="hero-logo">
                <BeeLogo size={240} className="floating-bee" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <h2 className="section-title">About</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Hi, I'm <strong>{homeContent.name}</strong>, a {homeContent.role} who bridges technical execution with strategic vision.
                </p>
                <p>
                  {homeContent.description}
                </p>
                <p>
                  {homeContent.vision}
                </p>
              </div>
              <div className="about-skills">
                <h3>Skills & Focus Areas</h3>
                <ul>
                  {homeContent.skills.technical.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <h2 className="contact-title">Get in touch</h2>
            <p>Have a project in mind?</p>
            <ul className="contact-links">
              <li><a href={`mailto:${contactInfo.email}`}>Email</a></li>
              <li><a href={contactInfo.social.linkedin.url} target="_blank" rel="noopener noreferrer">{contactInfo.social.linkedin.label}</a></li>
              <li><a href={contactInfo.social.bluesky.url} target="_blank" rel="noopener noreferrer">{contactInfo.social.bluesky.label}</a></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>📍 {contactInfo.location} | ✉️ <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> | 🌐 <a href={contactInfo.social.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a> | 🦋 <a href={contactInfo.social.bluesky.url} target="_blank" rel="noopener noreferrer">BlueSky</a></p>
        </div>
      </footer>
    </>
  )
}

export default IndexPage

export const Head = ({ data }) => HeadContent({
  title: data.homeContent.frontmatter.seo?.title || data.site.siteMetadata.title,
  description: data.homeContent.frontmatter.seo?.description || data.site.siteMetadata.description
});

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
        skills {
          technical
        }
        seo {
          title
          description
        }
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
