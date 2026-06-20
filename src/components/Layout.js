import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import CookieConsentBanner from './CookieConsent'

// Global styles are imported once here so pages don't have to.
import '../styles/fonts.css'
import '../styles/global.css'

/**
 * Deploy/this Layout — skip link + sticky Header + main + Contact Footer +
 * cookie consent banner. Pages pass their GraphQL contactInfo frontmatter
 * via the `contact` prop so the Footer stays data-driven.
 */
const Layout = ({ children, contact }) => (
  <>
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    <Header />
    <main role="main" id="main-content">
      {children}
    </main>
    <Footer contact={contact} />
    <CookieConsentBanner />
  </>
)

export default Layout
