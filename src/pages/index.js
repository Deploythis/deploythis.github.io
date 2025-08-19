import * as React from "react"
import { Link } from "gatsby"
import HeadContent from "../components/_head"
import BeeLogo from "../components/BeeLogo"
import "../styles/fonts.css"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="brand-highlight">{"{"}</span>Deploy/this<span className="brand-highlight">{"}"}</span>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/" className="active">About</Link></li>
              <li><Link to="/cv">Experience</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-layout">
              <div className="hero-text">
                <h1 className="hero-title">
                  Frontend Developer / Creative Technologist
                </h1>
                <p className="hero-subtitle">I am the bridge between creative vision and technical reality. My role is to translate "what if" ideas into a clear "how-to" roadmap, helping teams execute with confidence.</p>
              </div>
              <div className="hero-logo">
                <BeeLogo size={240} className="floating-bee" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <h2 className="section-title">About</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Hi, I'm <strong>Victor Hernandez</strong>, a Creative Technologist and Frontend Developer who bridges technical execution with strategic vision.
                </p>
                <p>
                  I specialize in <strong>translating between creative vision and technical reality</strong> – helping teams move from "what if" to "how to" with clarity and confidence. With over 30 years of experience across software engineering, digital transformation, and creative technology, I bring a unique perspective to building <strong>scalable, user-friendly, and high-performance applications</strong>.
                </p>
                <p>
                  My vision combines <strong>30 years of technology evolution experience</strong> with current AI-era opportunities to reskill further in React and JavaScript frameworks, upskill in Web Security, deepen expertise in Performance and Usability, and integrate AI to deliver smarter, more engaging user experiences.
                </p>
              </div>
              <div className="about-skills">
                <h3>Skills & Focus Areas</h3>
                <ul>
                  <li>Frontend Development</li>
                  <li>React & JavaScript frameworks</li>
                  <li>Performance optimization</li>
                  <li>Web Security & Accessibility</li>
                  <li>AI & Emerging Technologies</li>
                  <li>Digital Strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <h2 className="contact-title">Get in touch</h2>
            <p>Have a project in mind?</p>
            <ul className="contact-links">
              <li><a href="mailto:victor@deploythis.co">Email</a></li>
              <li><a href="https://www.linkedin.com/in/victorhernandezduran" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://bsky.app/profile/deploythis.bsky.social" target="_blank" rel="noopener noreferrer">BlueSky</a></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>📍 Brookline, MA | ✉️ <a href="mailto:victor@deploythis.co">victor@deploythis.co</a> | 🌐 <a href="https://www.linkedin.com/in/victorhernandezduran" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 🦋 <a href="https://bsky.app/profile/deploythis.bsky.social" target="_blank" rel="noopener noreferrer">BlueSky</a></p>
        </div>
      </footer>
    </>
  )
}

export default IndexPage

export const Head = () => HeadContent();
