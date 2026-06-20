import * as React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import HeadContent from '../components/_head'
import Layout from '../components/Layout'
import Eyebrow from '../components/Eyebrow'
import Card from '../components/Card'

const PrivacyPage = ({ data }) => {
  const privacyContent = data.privacyContent
  const contactInfo = data.contactInfo.frontmatter

  return (
    <Layout contact={contactInfo}>
      <section className="dt-hero">
        <div className="dt-container" style={{ maxWidth: 880 }}>
          <Eyebrow tick="//">privacy</Eyebrow>
          <h1 className="dt-hero__title">{privacyContent.frontmatter.title}</h1>
          <p className="dt-hero__body">{privacyContent.frontmatter.subtitle}</p>
        </div>
      </section>

      <section className="dt-section dt-section--sunken">
        <div className="dt-container" style={{ maxWidth: 880 }}>
          <Card>
            <div className="dt-content">
              <ReactMarkdown>{privacyContent.rawMarkdownBody}</ReactMarkdown>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
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
