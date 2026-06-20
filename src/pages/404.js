import * as React from 'react'
import { Link } from 'gatsby'
import HeadContent from '../components/_head'
import Button from '../components/Button'
import '../styles/fonts.css'
import '../styles/global.css'

const pageStyles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '96px 24px',
  textAlign: 'center',
}

const NotFoundPage = () => (
  <>
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    <header role="banner" style={{ padding: '24px' }}>
      <Link to="/" className="dt-wordmark" aria-label="Deploy/this — home">
        <span className="dt-wordmark__braces">{'{'}</span>
        Deploy/this
        <span className="dt-wordmark__braces">{'}'}</span>
      </Link>
    </header>
    <main role="main" id="main-content" style={pageStyles}>
      <h1 className="dt-hero__title">404 — page not found</h1>
      <p className="dt-hero__body" style={{ maxWidth: 600, margin: '1rem auto 2rem' }}>
        Sorry, we couldn&apos;t find what you were looking for.
      </p>
      <Button to="/" variant="primary" size="md">
        Go back home
      </Button>
    </main>
  </>
)

export default NotFoundPage

export const Head = () =>
  HeadContent({
    title: '404 - Page Not Found | Deploy/this',
    description: 'The requested page could not be found on Deploy/this.',
    pathname: '/404/',
  })
