import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../Button'

describe('Button', () => {
  it('renders as a Gatsby link when `to` is provided', () => {
    render(<Button to="/experience">View experience</Button>)
    const link = screen.getByRole('link', { name: /view experience/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveClass('dt-button')
    expect(link).toHaveClass('dt-button--primary')
    expect(link).toHaveClass('dt-button--md')
  })

  it('renders as an anchor when `href` is provided', () => {
    render(
      <Button href="https://example.com" variant="secondary">
        External
      </Button>
    )
    const link = screen.getByRole('link', { name: /external/i })
    expect(link).toHaveClass('dt-button--secondary')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('renders as a button when no link target is provided', () => {
    render(
      <Button size="lg" variant="ghost">
        Click me
      </Button>
    )
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('dt-button--lg')
    expect(button).toHaveClass('dt-button--ghost')
  })

  it('renders an icon on the right when provided', () => {
    const Icon = () => <svg data-testid="icon" aria-hidden="true" />
    render(<Button iconRight={<Icon />}>Get in touch</Button>)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
