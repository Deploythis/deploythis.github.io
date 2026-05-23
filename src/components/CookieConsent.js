import React from 'react'
import CookieConsent from 'react-cookie-consent'
import {
  ANALYTICS_CONSENT_COOKIE,
  disableAnalyticsConsent,
  enableAnalyticsConsent,
  GA_TRACKING_ID,
} from '../utils/analytics'

export { ANALYTICS_CONSENT_COOKIE, disableAnalyticsConsent, enableAnalyticsConsent, GA_TRACKING_ID }

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName={ANALYTICS_CONSENT_COOKIE}
      onAccept={enableAnalyticsConsent}
      onDecline={disableAnalyticsConsent}
      style={{ background: '#1F1F1F', padding: '16px' }}
      buttonStyle={{
        background: '#FFE014',
        color: '#1F1F1F',
        fontSize: '14px',
        fontWeight: '600',
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
      }}
      declineButtonStyle={{
        background: 'transparent',
        color: '#FFFFFF',
        fontSize: '14px',
        fontWeight: '400',
        padding: '10px 20px',
        borderRadius: '4px',
        border: '1px solid #FFFFFF',
        cursor: 'pointer',
      }}
      enableDeclineButton
      flipButtons
    >
      This website uses cookies to enhance user experience.{' '}
      <a href="/privacy" style={{ color: '#FFE014', textDecoration: 'underline' }}>
        Privacy Policy
      </a>
    </CookieConsent>
  )
}

export default CookieConsentBanner
