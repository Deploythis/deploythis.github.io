import * as React from 'react'

/**
 * Deploy/this Eyebrow — a mono, uppercase, wide-tracked section label with a
 * leading "tick" (shell syntax). e.g. `// about`, `$ get in touch`, `# skills`.
 *
 * Props:
 *  - tick:    the leading symbol (default '//')
 *  - children: the label text
 *  - as:      element/tag to render (default 'span')
 */
const Eyebrow = ({ tick = '//', children, as: Tag = 'span', className = '' }) => {
  const classes = ['dt-eyebrow', className].filter(Boolean).join(' ')

  return (
    <Tag className={classes}>
      <span className="dt-eyebrow__tick" aria-hidden="true">
        {tick}
      </span>
      <span>{children}</span>
    </Tag>
  )
}

export default Eyebrow
