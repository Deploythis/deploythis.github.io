import {
  disableAnalyticsConsent,
  hasAnalyticsConsent,
  loadGoogleAnalytics,
} from './src/utils/analytics'

export const onClientEntry = () => {
  if (hasAnalyticsConsent()) {
    loadGoogleAnalytics()
    return
  }

  disableAnalyticsConsent()
}
