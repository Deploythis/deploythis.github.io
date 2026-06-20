import * as React from 'react'

/**
 * Deploy/this StatusDot — 8px dot with an optional ping ring for live states.
 *
 * Props:
 *  - status: 'live' | 'building' | 'failed' | 'online' | 'offline'
 *  - pulse:  force the ping ring on (default: on for 'live' and 'online')
 */
const PULSING = new Set(['live', 'online'])

const StatusDot = ({ status = 'live', pulse }) => {
  const shouldPulse = pulse ?? PULSING.has(status)
  const classes = [
    'dt-status-dot',
    `dt-status-dot--${status}`,
    shouldPulse ? 'dt-status-dot--ping' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={classes} role="presentation" aria-hidden="true" />
}

export default StatusDot
