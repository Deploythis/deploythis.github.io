import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server.node'
import '@testing-library/jest-dom'
import HeadContent from '../_head'

const renderHead = props => {
  const container = document.createElement('div')
  const markup = renderToStaticMarkup(<HeadContent {...props} />)
  container.innerHTML = markup
  return { container, markup }
}

describe('HeadContent Component', () => {
  it('renders default title', () => {
    const { container } = renderHead()
    const title = container.querySelector('title')
    expect(title).toHaveTextContent('Deploy/this - Victor Hernandez')
  })

  it('renders custom title', () => {
    const { container } = renderHead({ title: 'Custom Title' })
    const title = container.querySelector('title')
    expect(title).toHaveTextContent('Custom Title')
  })

  it('renders default description meta tag', () => {
    const { container } = renderHead()
    const metaDescription = container.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute(
      'content',
      'Creative Technologist and Frontend Developer bridging technical execution with strategic vision'
    )
  })

  it('renders custom description', () => {
    const { container } = renderHead({ description: 'Custom description' })
    const metaDescription = container.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute('content', 'Custom description')
  })

  it('includes html lang attribute', () => {
    const { markup } = renderHead()
    expect(markup).toContain('<html lang="en"></html>')
  })

  it('includes Open Graph meta tags', () => {
    const { container } = renderHead({ title: 'Test Title', description: 'Test Description' })

    const ogTitle = container.querySelector('meta[property="og:title"]')
    expect(ogTitle).toHaveAttribute('content', 'Test Title')

    const ogDescription = container.querySelector('meta[property="og:description"]')
    expect(ogDescription).toHaveAttribute('content', 'Test Description')

    const ogType = container.querySelector('meta[property="og:type"]')
    expect(ogType).toHaveAttribute('content', 'website')
  })

  it('includes Twitter Card meta tags', () => {
    const { container } = renderHead({ title: 'Test Title', description: 'Test Description' })

    const twitterCard = container.querySelector('meta[name="twitter:card"]')
    expect(twitterCard).toHaveAttribute('content', 'summary')

    const twitterTitle = container.querySelector('meta[name="twitter:title"]')
    expect(twitterTitle).toHaveAttribute('content', 'Test Title')

    const twitterDescription = container.querySelector('meta[name="twitter:description"]')
    expect(twitterDescription).toHaveAttribute('content', 'Test Description')
  })

  it('includes canonical and richer social metadata', () => {
    const { container } = renderHead({
      title: 'CV Page',
      description: 'CV description',
      pathname: '/cv/',
      siteUrl: 'https://www.deploythis.co',
      siteName: 'Deploy/this',
      image: '/icons/icon-512x512.png',
    })

    const canonical = container.querySelector('link[rel="canonical"]')
    expect(canonical).toHaveAttribute('href', 'https://www.deploythis.co/cv/')

    const ogUrl = container.querySelector('meta[property="og:url"]')
    expect(ogUrl).toHaveAttribute('content', 'https://www.deploythis.co/cv/')

    const ogImage = container.querySelector('meta[property="og:image"]')
    expect(ogImage).toHaveAttribute('content', 'https://www.deploythis.co/icons/icon-512x512.png')

    const ogSiteName = container.querySelector('meta[property="og:site_name"]')
    expect(ogSiteName).toHaveAttribute('content', 'Deploy/this')

    const twitterImage = container.querySelector('meta[name="twitter:image"]')
    expect(twitterImage).toHaveAttribute(
      'content',
      'https://www.deploythis.co/icons/icon-512x512.png'
    )
  })
})
