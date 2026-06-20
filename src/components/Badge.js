import * as React from 'react'

/**
 * Deploy/this Badge — JetBrains Mono, pill.
 *
 * Props:
 *  - tone:   'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'brand'
 *  - variant:'solid' | 'soft' | 'outline'  (default 'soft')
 *  - dot:    show a leading colored dot
 */
const Badge = ({ children, tone = 'neutral', variant = 'soft', dot = false, className = '' }) => {
  const classes = ['dt-badge', `dt-badge--${tone}`, `dt-badge--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes}>
      {dot ? <span className="dt-badge__dot" aria-hidden="true" /> : null}
      {children}
    </span>
  )
}

export default Badge
