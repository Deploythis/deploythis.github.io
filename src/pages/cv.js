import * as React from "react"
import { Link } from "gatsby"
import HeadContent from "../components/_head"
import BeeLogo from "../components/BeeLogo"
import "../styles/fonts.css"
import "../styles/global.css"

const CVPage = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="brand-highlight">{"{"}</span>Deploy/this<span className="brand-highlight">{"}"}</span>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">About</Link></li>
              <li><Link to="/cv" className="active">Experience</Link></li>
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
                <h1 className="hero-title">CV / Portfolio</h1>
                <p className="hero-subtitle">Senior Frontend Developer with extensive experience in JavaScript frameworks, digital strategy, and full stack solutions. Skilled in creating engaging user experiences, optimizing performance, and leading digital initiatives for major global clients.</p>
              </div>
              <div className="hero-logo">
                <BeeLogo size={120} className="floating-bee" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Experience</h2>

            <div className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">Senior Frontend Developer</h3>
                <p className="experience-dates">Endava • Nov 2021 – Present</p>
              </div>
              <div className="experience-content">
                <ul>
                  <li>Enhance and maintain documentation projects using Adobe AEM / AIO, JavaScript, Sass, and Node.js</li>
                  <li>Implemented new editor functionality and improved accuracy of content systems</li>
                  <li>Built proprietary web components and ensured robust CSS framework consistency</li>
                </ul>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">Creative Technologist / Full Stack Developer</h3>
                <p className="experience-dates">Nullun • 2008 – 2021</p>
              </div>
              <div className="experience-content">
                <ul>
                  <li>Consulted for agencies and software companies on digital products, technical leadership, and team building</li>
                </ul>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">Digital Director / Creative Technologist</h3>
                <p className="experience-dates">Ogilvy & Mather • 2016 – 2017</p>
              </div>
              <div className="experience-content">
                <ul>
                  <li>Led digital strategic planning for Coca-Cola, Pfizer, Claro, Allianz, Dunkin Donuts, and others</li>
                  <li>Guided teams in building campaigns and adopting digital-first processes</li>
                </ul>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">Creative Technologist Director</h3>
                <p className="experience-dates">Sancho BBDO • 2010 – 2016</p>
              </div>
              <div className="experience-content">
                <ul>
                  <li>Drove digital transformation, innovation teams, and prototyping initiatives</li>
                  <li>Oversaw production teams, delivering scalable and creative digital campaigns</li>
                </ul>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">Full Stack Developer</h3>
                <p className="experience-dates">Various Companies • 1997 – 2010</p>
              </div>
              <div className="experience-content">
                <ul>
                  <li><strong>La Cápsula</strong> – Full Stack Developer (2007 – 2010)</li>
                  <li><strong>WWF Colombia</strong> – Full Stack Developer (2001 – 2007)</li>
                  <li><strong>Banco Aliadas</strong> – Full Stack Developer (2001 – 2006)</li>
                  <li><strong>Brincabrinca Ltd (Co-Founder)</strong> – Full Stack Developer (1997 – 2005)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-simple">
              <div>React development</div>
              <div>JavaScript frameworks</div>
              <div>TypeScript</div>
              <div>Node.js</div>
              <div>Performance optimization</div>
              <div>Web Security</div>
              <div>Accessibility</div>
              <div>Generative AI</div>
              <div>Digital Strategy</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Education & Awards</h2>
            <div className="simple-content">
              <div className="education-item">
                <strong>Holberton School</strong><br />
                Full Stack Software Engineering (2019–2021)
              </div>
              <div className="education-item">
                <strong>Institución Universitaria Antonio José Camacho</strong><br />
                Academic Studies (1996–1999)
              </div>
              <div className="awards">
                <h3>Recognition</h3>
                <p>Bronze Awards in Media, Cyber, and Social & Influencer categories for campaigns including <em>Run for Your Balls</em>, <em>VoiceBank</em>, and <em>Lions Earth is Saying</em>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <h2 className="contact-title">Have a project in mind?</h2>
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

export default CVPage

export const Head = () => (
  <HeadContent 
    title="Victor Hugo Hernandez - CV & Portfolio"
    description="Senior Frontend Developer with extensive experience in JavaScript frameworks, digital strategy, and full stack solutions"
  />
)