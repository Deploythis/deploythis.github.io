import * as React from 'react'
import { Link } from 'gatsby'

/**
 * Deploy/this Button — pill, 2px ink border, hard-shadow hover lift.
 *
 * Props:
 *  - variant: 'primary' | 'secondary' | 'ghost'  (default 'primary')
 *  - size:    'sm' | 'md' | 'lg'                  (default 'md')
 *  - to:      Gatsby internal path  -> renders <Link>
 *  - href:    external URL          -> renders <a>
 *  - (neither)                       -> renders <button>
 *  - iconRight: optional React node rendered after the label
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  iconRight,
  className = '',
  ...rest
}) => {
  const classes = ['dt-button', `dt-button--${variant}`, `dt-button--${size}`, className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span>{children}</span>
      {iconRight ? <span className="dt-button__icon">{iconRight}</span> : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}

export default Button
