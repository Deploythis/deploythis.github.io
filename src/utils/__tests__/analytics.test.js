import {
  ANALYTICS_CONSENT_COOKIE,
  disableAnalyticsConsent,
  GA_TRACKING_ID,
  hasAnalyticsConsent,
  loadGoogleAnalytics,
} from '../analytics'

describe('analytics utilities', () => {
  beforeEach(() => {
    document.cookie = `${ANALYTICS_CONSENT_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
    document.head.innerHTML = ''
    delete window[`ga-disable-${GA_TRACKING_ID}`]
    delete window.gtag
    delete window.dataLayer
  })

  it('does not report analytics consent by default', () => {
    expect(hasAnalyticsConsent()).toBe(false)
  })

  it('detects accepted analytics consent cookie', () => {
    document.cookie = `${ANALYTICS_CONSENT_COOKIE}=true; path=/`

    expect(hasAnalyticsConsent()).toBe(true)
  })

  it('disables analytics explicitly', () => {
    disableAnalyticsConsent()

    expect(window[`ga-disable-${GA_TRACKING_ID}`]).toBe(true)
  })

  it('loads Google Analytics only when requested', () => {
    loadGoogleAnalytics()

    const script = document.querySelector(
      `script[src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"]`
    )
    expect(script).toBeInTheDocument()
    expect(script.async).toBe(true)
    expect(window[`ga-disable-${GA_TRACKING_ID}`]).toBe(false)
    expect(window.gtag).toEqual(expect.any(Function))
    expect(window.dataLayer.length).toBeGreaterThan(0)
  })
})
