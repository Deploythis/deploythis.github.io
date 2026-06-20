import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import { ArrowRight } from 'lucide-react'
import HeadContent from '../components/_head'
import Layout from '../components/Layout'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import Card from '../components/Card'
import Terminal from '../components/Terminal'

// Render **bold** spans. "Victor Hernandez" gets the brand mark highlight;
// every other bold phrase renders as a plain strong (text_strong, weight 700),
// matching the spec's inline_emphasis rules.
const toText = children =>
  React.Children.toArray(children)
    .map(child => (typeof child === 'string' ? child : toText(child.props?.children)))
    .join('')

const Strong = ({ children }) => {
  if (toText(children).trim() === 'Victor Hernandez') {
    return <mark className="dt-mark">{children}</mark>
  }
  return <strong>{children}</strong>
}

const markdownComponents = { strong: Strong }

const IndexPage = ({ data }) => {
  const homeContent = data.homeContent.frontmatter
  const contactInfo = data.contactInfo.frontmatter

  return (
    <Layout contact={contactInfo}>
      {/* Hero */}
      <section className="dt-hero">
        <div className="dt-container">
          <div className="dt-hero__grid">
            <div className="dt-hero__text">
              <Eyebrow tick="//">software engineer · creative technologist</Eyebrow>
              <h1 className="dt-hero__title">{homeContent.title}</h1>
              <p className="dt-hero__body">{homeContent.subtitle}</p>
              <div className="dt-hero__ctas">
                <Button to="/#contact" variant="primary" size="md" iconRight={<ArrowRight />}>
                  Get in touch
                </Button>
                <Button to="/experience" variant="secondary" size="md">
                  View experience
                </Button>
              </div>
            </div>
            <div className="dt-hero__visual">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* About (sunken) */}
      <section className="dt-section dt-section--sunken" id="about">
        <div className="dt-container">
          <div className="dt-section__head">
            <Eyebrow tick="//">about</Eyebrow>
            <h2 className="dt-section__title">Building for the people doing the work.</h2>
          </div>

          <div className="dt-about__grid">
            <div className="dt-about__text">
              <ReactMarkdown components={markdownComponents}>{homeContent.bio}</ReactMarkdown>
              <ReactMarkdown components={markdownComponents}>
                {homeContent.description}
              </ReactMarkdown>
              <ReactMarkdown components={markdownComponents}>{homeContent.vision}</ReactMarkdown>
            </div>

            <Card>
              <Eyebrow tick="#">skills &amp; focus areas</Eyebrow>
              <ul className="dt-about__skill-list">
                {homeContent.skills.technical.map(skill => (
                  <li key={skill} className="dt-about__skill">
                    <span className="dt-about__skill-prefix" aria-hidden="true">
                      {'>'}
                    </span>
                    <span className="dt-about__skill-label">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = ({ data }) =>
  HeadContent({
    title:
      data.homeContent.frontmatter.seo?.title ||
      'Victor Hernandez — Software Engineer & Creative Technologist',
    description:
      data.homeContent.frontmatter.seo?.description || data.site.siteMetadata.description,
    pathname: '/',
    siteUrl: data.site.siteMetadata.siteUrl,
    siteName: 'Deploy/this',
    image: data.homeContent.frontmatter.seo?.image || '/icons/icon-512x512.png',
  })

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
        bio
        description
        vision
        skills {
          technical
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
