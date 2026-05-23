export const GA_TRACKING_ID = 'G-D6DBB7GWZM'
export const ANALYTICS_CONSENT_COOKIE = 'deploythis-analytics-consent'

export const getAnalyticsDisableKey = () => `ga-disable-${GA_TRACKING_ID}`

export const hasAnalyticsConsent = () =>
  typeof document !== 'undefined' &&
  document.cookie
    .split(';')
    .map(cookie => cookie.trim())
    .some(cookie => cookie.startsWith(`${ANALYTICS_CONSENT_COOKIE}=true`))

export const hasDoNotTrackEnabled = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false
  return navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.msDoNotTrack === '1'
}

export const disableAnalyticsConsent = () => {
  if (typeof window === 'undefined') return
  window[getAnalyticsDisableKey()] = true
}

export const loadGoogleAnalytics = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  if (hasDoNotTrackEnabled()) {
    disableAnalyticsConsent()
    return
  }

  window[getAnalyticsDisableKey()] = false
  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments)
    }

  if (
    !document.querySelector(
      `script[src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"]`
    )
  ) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    document.head.appendChild(script)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_TRACKING_ID, {
    anonymize_ip: true,
    cookie_expires: 0,
  })
}

export const enableAnalyticsConsent = () => {
  loadGoogleAnalytics()
}
