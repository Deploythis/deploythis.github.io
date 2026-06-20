import * as React from 'react'
import StatusDot from './StatusDot'

/**
 * Deploy/this Terminal — ink-background card showing a shell session.
 * Hero element on the About page. Content is decorative brand flavour.
 */

const LINES = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'victor hernandez — creative technologist' },
  { type: 'command', text: 'cat focus.txt' },
  { type: 'output', text: 'frontend · content infra · platform tooling' },
  { type: 'command', text: 'deploy ./me --to frontline' },
  { type: 'status', status: 'online', text: 'online · 25+ yrs uptime · Brookline, MA' },
]

const Terminal = () => (
  <div className="dt-terminal" aria-label="Terminal session" role="img">
    <div className="dt-terminal__bar">
      <div className="dt-terminal__lights" aria-hidden="true">
        <span className="dt-terminal__light dt-terminal__light--red" />
        <span className="dt-terminal__light dt-terminal__light--yellow" />
        <span className="dt-terminal__light dt-terminal__light--green" />
      </div>
      <span className="dt-terminal__title">victor@deploythis: ~</span>
    </div>
    <div className="dt-terminal__body">
      {LINES.map((line, i) => {
        if (line.type === 'command') {
          return (
            <span key={i} className="dt-terminal__line">
              <span className="dt-terminal__prompt">$</span>{' '}
              <span className="dt-terminal__output">{line.text}</span>
            </span>
          )
        }
        if (line.type === 'status') {
          return (
            <span key={i} className="dt-terminal__line">
              <StatusDot status={line.status} pulse />{' '}
              <span className="dt-terminal__status">{line.text}</span>
            </span>
          )
        }
        return (
          <span key={i} className="dt-terminal__line dt-terminal__output">
            {line.text}
          </span>
        )
      })}
      <span className="dt-terminal__line">
        <span className="dt-terminal__prompt">$</span>
        <span className="dt-terminal__cursor" aria-hidden="true" />
      </span>
    </div>
  </div>
)

export default Terminal
