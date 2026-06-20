import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Eyebrow from '../Eyebrow'

describe('Eyebrow', () => {
  it('renders a default section tick with the label', () => {
    render(<Eyebrow>about</Eyebrow>)
    expect(screen.getByText('//')).toBeInTheDocument()
    expect(screen.getByText('about')).toBeInTheDocument()
    expect(screen.getByText('about').parentElement).toHaveClass('dt-eyebrow')
  })

  it('renders a custom tick', () => {
    render(<Eyebrow tick="$">get in touch</Eyebrow>)
    expect(screen.getByText('$')).toBeInTheDocument()
    expect(screen.getByText('get in touch')).toBeInTheDocument()
  })

  it('renders the hash tick', () => {
    render(<Eyebrow tick="#">skills</Eyebrow>)
    expect(screen.getByText('#')).toBeInTheDocument()
  })
})
