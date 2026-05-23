import * as React from 'react'
import { Link } from 'gatsby'
import BeeLogo from '../components/BeeLogo'
import HeadContent from '../components/_head'
import '../styles/fonts.css'
import '../styles/global.css'

const pageStyles = {
  color: '#1F1F1F',
  padding: '96px 24px',
  fontFamily: 'var(--font-body)',
  textAlign: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const headingStyles = {
  fontFamily: 'var(--font-logo)',
  fontSize: '3rem',
  marginBottom: '2rem',
  color: '#1F1F1F',
}

const paragraphStyles = {
  marginBottom: '2rem',
  fontSize: '1.25rem',
  maxWidth: '600px',
}

const linkStyles = {
  display: 'inline-block',
  padding: '12px 24px',
  background: '#FFE014',
  color: '#1F1F1F',
  textDecoration: 'none',
  borderRadius: '4px',
  fontWeight: '600',
  transition: 'transform 0.2s',
}

const NotFoundPage = () => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header role="banner" style={{ padding: '20px', textAlign: 'center' }}>
        <BeeLogo size={120} />
      </header>
      <main role="main" id="main-content" style={pageStyles}>
        <h1 style={headingStyles}>404 - Page not found</h1>
        <p style={paragraphStyles}>
          Sorry, we couldn&apos;t find what you were looking for.
          <br />
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
        </p>
        <Link to="/" style={linkStyles}>
          Go back home
        </Link>
      </main>
      <footer role="contentinfo" style={{ padding: '20px', textAlign: 'center' }}>
        <p>Deploy/this - Victor Hernandez</p>
      </footer>
    </>
  )
}

export default NotFoundPage

export const Head = () =>
  HeadContent({
    title: '404 - Page Not Found | Deploy/this',
    description: 'The requested page could not be found on Deploy/this.',
    pathname: '/404/',
  })
