import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CookieConsentBanner, {
  disableAnalyticsConsent,
  enableAnalyticsConsent,
  GA_TRACKING_ID,
} from '../CookieConsent'

describe('CookieConsentBanner', () => {
  beforeEach(() => {
    delete window[`ga-disable-${GA_TRACKING_ID}`]
  })

  it('renders the cookie consent banner with privacy policy link', () => {
    render(<CookieConsentBanner />)

    expect(screen.getByText(/This website uses cookies/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toHaveAttribute(
      'href',
      '/privacy'
    )
  })

  it('renders accept and decline controls', () => {
    render(<CookieConsentBanner />)

    expect(screen.getByRole('button', { name: /Accept/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Decline/i })).toBeInTheDocument()
  })

  it('enables analytics when consent is accepted', () => {
    disableAnalyticsConsent()

    enableAnalyticsConsent()

    expect(window[`ga-disable-${GA_TRACKING_ID}`]).toBe(false)
  })

  it('keeps analytics disabled when consent is declined', () => {
    enableAnalyticsConsent()

    disableAnalyticsConsent()

    expect(window[`ga-disable-${GA_TRACKING_ID}`]).toBe(true)
  })
})
