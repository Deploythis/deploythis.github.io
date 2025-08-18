import * as React from "react"
import { Link } from "gatsby"
import HeadContent from "../components/_head"
import BeeLogo from "../components/BeeLogo"
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
              <li><Link to="#contact">Contact</Link></li>
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
                  Victor Hugo Hernandez
                  <br />Frontend Developer
                </h1>
                <p className="hero-subtitle">With over 15 years of experience across software engineering, digital transformation, and creative technology. Available for freelance projects and full-time opportunities.</p>
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
                  Hi, I'm <strong>Victor Hugo Hernandez</strong>, a Frontend Developer based in Brookline, Massachusetts.
                </p>
                <p>
                  I bring a unique perspective to building <strong>scalable, user-friendly, and high-performance applications</strong> through my experience in software engineering, digital transformation, and creative technology.
                </p>
                <p>
                  My goal over the next 2–3 years is to reskill further in React and JavaScript frameworks, upskill in Web Security, deepen expertise in Performance and Usability, and integrate AI to deliver smarter, more engaging user experiences.
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
              <li><a href="mailto:victor.hernandez.col@gmail.com">Email</a></li>
              <li><a href="https://www.linkedin.com/in/victorhernandezduran" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© Victor Hugo Hernandez • Frontend Developer based in Brookline, MA</p>
        </div>
      </footer>
    </>
  )
}

export default IndexPage

export const Head = () => HeadContent();
