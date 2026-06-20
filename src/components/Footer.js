import * as React from 'react'
import { Mail, Briefcase, Cloud } from 'lucide-react'
import Eyebrow from './Eyebrow'

const ICONS = {
  email: Mail,
  linkedin: Briefcase,
  bluesky: Cloud,
}

const Footer = ({ contact }) => {
  const email = contact?.email || 'victor@deploythis.co'
  const location = contact?.location || 'Brookline, MA'
  const social = contact?.social || {}

  const links = [
    { key: 'email', label: 'Email', href: `mailto:${email}` },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      href: social?.linkedin?.url,
      external: true,
    },
    {
      key: 'bluesky',
      label: 'BlueSky',
      href: social?.bluesky?.url,
      external: true,
    },
  ].filter(l => l.href)

  return (
    <footer className="dt-footer" id="contact" role="contentinfo">
      <div className="dt-container">
        <Eyebrow tick="$">get in touch</Eyebrow>
        <h2 className="dt-footer__heading">
          Have a project in mind?
          <span className="dt-footer__cursor" aria-hidden="true" />
        </h2>
        <p className="dt-footer__subtext">
          Frontend systems, content infrastructure, platform tooling — let&apos;s ship it.
        </p>

        <ul className="dt-footer__links">
          {links.map(link => {
            const Icon = ICONS[link.key]
            return (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="dt-footer__link"
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={`${link.label} — Victor Hernandez`}
                >
                  {Icon ? <Icon aria-hidden="true" /> : null}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="dt-footer__divider" />

        <div className="dt-footer__meta">
          <span>📍 {location}</span>
          <span>{email}</span>
          <span>
            <span className="dt-wordmark__braces">{'{ '}</span>
            Deploy/this
            <span className="dt-wordmark__braces">{' }'}</span> — :apps to the frontline_
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
