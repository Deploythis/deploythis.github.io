import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Terminal from '../Terminal'

describe('Terminal', () => {
  it('renders the shell chrome and a session label', () => {
    render(<Terminal />)
    expect(screen.getByLabelText(/terminal session/i)).toBeInTheDocument()
    expect(screen.getByText(/victor@deploythis/i)).toBeInTheDocument()
  })

  it('renders prompts and the focus output line', () => {
    const { container } = render(<Terminal />)
    const prompts = container.querySelectorAll('.dt-terminal__prompt')
    expect(prompts.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('whoami')).toBeInTheDocument()
    expect(screen.getByText('frontend · content infra · platform tooling')).toBeInTheDocument()
  })

  it('renders a blinking cursor', () => {
    const { container } = render(<Terminal />)
    expect(container.querySelector('.dt-terminal__cursor')).toBeInTheDocument()
  })
})
