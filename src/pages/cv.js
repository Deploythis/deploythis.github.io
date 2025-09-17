import * as React from "react"
import { Link, graphql } from "gatsby"
import HeadContent from "../components/_head"
import BeeLogo from "../components/BeeLogo"
import "../styles/fonts.css"
import "../styles/global.css"

const CVPage = ({ data }) => {
  const cvContent = data.cvContent.frontmatter
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
              <li><Link to="/">About</Link></li>
              <li><Link to="/cv" className="active">Experience</Link></li>
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
                <h1 className="hero-title">{cvContent.title}</h1>
                <p className="hero-subtitle">{cvContent.subtitle}</p>
              </div>
              <div className="hero-logo">
                <BeeLogo size={120} className="floating-bee" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Experience</h2>

            {cvContent.experience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h3 className="experience-title">{job.title}</h3>
                  <p className="experience-dates">{job.company} • {job.period}</p>
                </div>
                <div className="experience-content">
                  <ul>
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-simple">
              {cvContent.skills.technical.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Education & Awards</h2>
            <div className="simple-content">
              {cvContent.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <strong>{edu.institution}</strong><br />
                  {edu.degree} ({edu.year})
                </div>
              ))}
              <div className="awards">
                <h3>Recognition</h3>
                <p>{cvContent.awards.recognition}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <h2 className="contact-title">Have a project in mind?</h2>
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

export default CVPage

export const Head = ({ data }) => (
  <HeadContent
    title={data.cvContent.frontmatter.seo?.title || "Victor Hernandez - CV & Portfolio"}
    description={data.cvContent.frontmatter.seo?.description || data.site.siteMetadata.description}
  />
)

export const query = graphql`
  query CVPageQuery {
    cvContent: markdownRemark(
      frontmatter: { type: { eq: "page" } }
      fileAbsolutePath: { regex: "/content/pages/cv/" }
    ) {
      frontmatter {
        title
        subtitle
        experience {
          title
          company
          period
          description
        }
        skills {
          technical
        }
        education {
          degree
          institution
          year
        }
        awards {
          recognition
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