import * as React from 'react'

/**
 * Deploy/this Card — 18px radius, 1px subtle border, soft resting shadow.
 *
 * Props:
 *  - variant: 'default' | 'interactive' | 'inverse'  (default 'default')
 *  - padding: overrides the default 24px padding
 *  - as: element/tag to render (default 'div')
 */
const Card = ({
  children,
  variant = 'default',
  padding,
  as: Tag = 'div',
  className = '',
  ...rest
}) => {
  const classes = ['dt-card', `dt-card--${variant}`, className].filter(Boolean).join(' ')

  const style = padding ? { padding } : undefined

  return (
    <Tag className={classes} style={style} {...rest}>
      {children}
    </Tag>
  )
}

export default Card
