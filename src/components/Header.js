import * as React from 'react'
import { Link } from 'gatsby'
import Button from './Button'

const NAV_LINKS = [
  { label: 'About', to: '/' },
  { label: 'Experience', to: '/experience' },
]

const Wordmark = () => (
  <Link to="/" className="dt-wordmark" aria-label="Deploy/this — home">
    <span className="dt-wordmark__braces">{'{'}</span>
    Deploy/this
    <span className="dt-wordmark__braces">{'}'}</span>
  </Link>
)

const NavLinks = ({ className }) => (
  <ul className={className}>
    {NAV_LINKS.map(link => (
      <li key={link.to}>
        <Link to={link.to} className="dt-nav__link" activeClassName="dt-nav__link--active">
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
)

/**
 * Deploy/this Header — sticky, blurred, wordmark + nav + Contact CTA.
 */
const Header = () => (
  <header className="dt-header" role="banner">
    <div className="dt-container dt-header__inner">
      <Wordmark />
      <nav role="navigation" aria-label="Main navigation">
        <NavLinks className="dt-nav__list" />
        <NavLinks className="dt-nav__mobile" />
      </nav>
      <div className="dt-header__cta">
        <Button to="/#contact" variant="primary" size="sm">
          Contact
        </Button>
      </div>
    </div>
  </header>
)

export default Header
