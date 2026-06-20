import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import HeadContent from '../components/_head'
import Layout from '../components/Layout'
import Eyebrow from '../components/Eyebrow'
import Card from '../components/Card'
import Badge from '../components/Badge'

const pad2 = n => String(n).padStart(2, '0')

const ExperiencePage = ({ data }) => {
  const cvContent = data.cvContent.frontmatter
  const contactInfo = data.contactInfo.frontmatter

  return (
    <Layout contact={contactInfo}>
      {/* Hero */}
      <section className="dt-hero">
        <div className="dt-container" style={{ maxWidth: 880 }}>
          <Eyebrow tick="//">experience · 25+ years</Eyebrow>
          <h1 className="dt-hero__title">Experience</h1>
          <p className="dt-hero__body">{cvContent.subtitle}</p>
        </div>
      </section>

      {/* Roles (sunken) */}
      <section className="dt-section dt-section--sunken" id="roles">
        <div className="dt-container">
          <div className="dt-section__head">
            <Eyebrow tick="//">work history</Eyebrow>
          </div>

          <div className="dt-roles">
            {cvContent.experience.map((job, index) => {
              const isCurrent = /present/i.test(job.period)
              return (
                <Card key={index} as="article">
                  <div className="dt-role">
                    <div className="dt-role__number" aria-hidden="true">
                      {pad2(index + 1)}
                    </div>
                    <div className="dt-role__body">
                      <div className="dt-role__top">
                        <h2 className="dt-role__title">{job.title}</h2>
                        {isCurrent ? (
                          <Badge tone="success" variant="soft" dot>
                            current
                          </Badge>
                        ) : null}
                      </div>
                      <div className="dt-role__org">{job.company}</div>
                      <div className="dt-role__dates">{job.period}</div>

                      <ul className="dt-role__bullets">
                        {job.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="dt-role__bullet">
                            <span className="dt-role__bullet-prefix" aria-hidden="true">
                              {'>'}
                            </span>
                            <ReactMarkdown>{item}</ReactMarkdown>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="dt-section" id="skills">
        <div className="dt-container">
          <div className="dt-section__head">
            <Eyebrow tick="#">skills</Eyebrow>
            <h2 className="dt-section__title">What I work with</h2>
          </div>
          <div className="dt-skills">
            {cvContent.skills.technical.map(skill => (
              <Badge key={skill} tone="neutral" variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Awards (sunken) */}
      <section className="dt-section dt-section--sunken" id="edu-awards">
        <div className="dt-container">
          <div className="dt-edu-grid">
            {cvContent.education.map((edu, index) => (
              <Card key={`edu-${index}`}>
                <Eyebrow tick="#">education</Eyebrow>
                <div className="dt-edu-card__title">{edu.institution}</div>
                <div className="dt-edu-card__subtitle">{edu.degree}</div>
                <div className="dt-edu-card__dates">{edu.year}</div>
              </Card>
            ))}

            <Card>
              <Eyebrow tick="#">recognition</Eyebrow>
              <div className="dt-edu-card__title">Three Bronze Lions · Cannes</div>
              <div className="dt-edu-card__body">{cvContent.awards.recognition}</div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ExperiencePage

export const Head = ({ data }) =>
  HeadContent({
    title: data.cvContent.frontmatter.seo?.title || 'Experience — Victor Hernandez',
    description: data.cvContent.frontmatter.seo?.description || data.site.siteMetadata.description,
    pathname: '/experience/',
    siteUrl: data.site.siteMetadata.siteUrl,
    siteName: 'Deploy/this',
    image: data.cvContent.frontmatter.seo?.image || '/icons/icon-512x512.png',
  })

export const query = graphql`
  query ExperiencePageQuery {
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
          image
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
        siteUrl
      }
    }
  }
`
