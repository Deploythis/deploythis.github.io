import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BeeLogo from '../BeeLogo'

describe('BeeLogo Component', () => {
  it('renders the logo image', () => {
    render(<BeeLogo />)
    const logo = screen.getByAltText(/Deploy\/this - Creative Technologist Victor Hernandez Logo/i)
    expect(logo).toBeInTheDocument()
  })

  it('applies the correct size', () => {
    const { container } = render(<BeeLogo size={100} />)
    const logoContainer = container.querySelector('.bee-logo')
    expect(logoContainer).toHaveStyle({ width: '100px', height: '100px' })
  })

  it('applies custom className', () => {
    const { container } = render(<BeeLogo className="custom-class" />)
    const logoContainer = container.querySelector('.custom-class')
    expect(logoContainer).toBeInTheDocument()
  })

  it('has accessible alt text for screen readers', () => {
    render(<BeeLogo />)
    const logo = screen.getByRole('img')
    expect(logo).toHaveAccessibleName(/Deploy\/this - Creative Technologist Victor Hernandez Logo/i)
  })

  it('uses default size when size prop is not provided', () => {
    const { container } = render(<BeeLogo />)
    const logoContainer = container.querySelector('.bee-logo')
    expect(logoContainer).toHaveStyle({ width: '64px', height: '64px' })
  })
})
