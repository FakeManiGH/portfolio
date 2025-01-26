import './App.css'
import {
  ta_logo,
  rib_logo,
  php,
  react,
  js,
  ts,
  sql,
  css,
  html,
  md,
  bootstrap,
  wordpress,
  node,
  axios,
  own_image,
  question,
  express
} from './assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp, faAt, faCameraRetro, faCoffee, faGlobe, faLaptopCode, faMailBulk, faMailForward, faTerminal, faUser } from '@fortawesome/free-solid-svg-icons'
import { Alert } from './components'
import { useState } from 'react'
import formValidation from './utils/formValidation'
const messageServiceAPI = import.meta.env.VITE_MESSAGE_SERVICE_API

function App() {
  const [alert, setAlert] = useState({ isOpen: false, message: '' })
  
  // Contact form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);

    for (let [key, value] of formData.entries()) {
      const error = formValidation(key, value)
      if (error) {
        setAlert({ isOpen: true, type: 'error', message: error })
        return
      }
    }

    fetch(messageServiceAPI, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }

    }).then(response => {
      if (response.ok) {
        setAlert({ isOpen: true, type: 'success', message: 'Message sent successfully. I will contact you soon.' })
      }

    }).catch(error => {
      setAlert({ isOpen: true, type: 'error', message: 'Error occured while sending message. Please try again later.' })
      console.error('Error:', error)
    });

    e.target.reset();
  }

  // Get current year for footer
  const getCurrentYear = () => {
    return new Date().getFullYear().toString()
  }

  // info alert for photography
  const showInfoAlert = () => {
    setAlert({ isOpen: true, message: 'Photography page is coming soon...' })
  }

  return (
    <>
      <Alert alert={alert} setAlert={setAlert} />
      <header>
        <img className='head-logo' src={ta_logo} alt="Timo Anjala Logo" />
        <h1>Web Developer & ICT Specialist</h1>
        <p>Also, Free-time nature photographer</p>
        <nav className='button-group header-links icons'>
          <a href="https://www.linkedin.com/in/timo-anjala-iam/" target='_blanc' data-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/fakemanigh" target='_blanc' data-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          <button onClick={showInfoAlert} data-label="Photography"><FontAwesomeIcon icon={faCameraRetro} /></button>
        </nav>
      </header>

      <nav className='content-navigation'>
        <a href="#projects"><FontAwesomeIcon icon={faLaptopCode} /><p>PROJECTS</p></a>
        <a href="#dev-skills"><FontAwesomeIcon icon={faTerminal} /><p>DEV SKILLS</p></a>
        <a href="#about"><FontAwesomeIcon icon={faUser} /><p>ABOUT ME</p></a>
        <a href="#contact"><FontAwesomeIcon icon={faAt} /><p>CONTACT</p></a>
      </nav>

      <main>
        <section id="projects">
          <h2>Projects</h2>
          <p>Here are some of my personal projects worth mentioning.</p>
          <ul className='card-grid'>
            <li className='card'>
              <h3>React imageBrowser</h3>
              <img src={rib_logo} alt="React imageBrowser logo" />
              <p>RiB is pre-built image viewing component (node_module) for React applications.</p>
              <a href="https://fakemanigh.github.io/rib-website/" target='_blanc'><button><FontAwesomeIcon icon={faGlobe} /><p>Visit project page</p></button></a>
              <a href="https://github.com/fakemanigh/react-image-browser" target='_blanc'><button><FontAwesomeIcon icon={faGithub} /><p>GitHub page</p></button></a>
            </li>
            <li className='card'>
              <h3>Portfolio Website</h3>
              <img src={ta_logo} alt="Timo Anjala logo" />
              <p>You&apos;re looking at it.</p>
              <p>A simple React application that showcases my skills and projects.</p>
              <a href="https://github.com/fakemanigh/portfolio" target='_blanc'><button><FontAwesomeIcon icon={faGithub} /><p>View code in GitHub</p></button></a>
            </li>
            <li className='card'>
              <h3>TBD</h3>
              <img src={question} alt="Question image svg" />
              <p>Maybe your project?</p>
              <p>Let&apos;s talk about it.</p>
              <a href="#contact"><button><FontAwesomeIcon icon={faAt} /><p>Contact me</p></button></a>
            </li>
          </ul>
        </section>

        <hr />

        <section id="dev-skills">
          <h2>DEV skills</h2>
          <p>Here are some of my web development languages, frameworks, libraries and tools I use. Everything is not listed here, so ask me for a specifics.</p>
          <h3>Languages</h3>
          <ul className='small-card-grid'>
            <li className='small-card'>
              <img src={css} alt="CSS illustration" />
              <h4>CSS</h4>
            </li>
            <li className='small-card'>
              <img src={html} alt="HTML illustration" />
              <h4>HTML</h4>
            </li>
            <li className='small-card'>
              <img src={js} alt="JavaScript illustration" />
              <h4>JavaScript</h4>
            </li>
            <li className='small-card'>
              <img src={md} alt="Markdown illustration" />
              <h4>Markdown</h4>
            </li>
            <li className='small-card'>
              <img src={php} alt="PHP illustration" />
              <h4>PHP</h4>
            </li>
            <li className='small-card'>
              <img src={sql} alt="SQL illustration" />
              <h4>SQL</h4>
            </li>
            <li className='small-card'>
              <img src={ts} alt="Typescript illustration" />
              <h4>Typescript</h4>
            </li>
          </ul>

          <h3>Frameworks, Libraries & CMS</h3>
          <ul className='small-card-grid'>
            <li className='small-card'>
              <img src={axios} alt="Axios illustration" />
              <h4>Axios</h4>
            </li>
            <li className='small-card'>
              <img src={express} alt="Express.js illustration" />
              <h4>Express.js</h4>
            </li>
            <li className='small-card'>
              <img src={bootstrap} alt="Bootstrap illustration" />
              <h4>Bootstrap</h4>
            </li>
            <li className='small-card'>
              <img src={node} alt="Node.js illustration" />
              <h4>Node.js</h4>
            </li>
            <li className='small-card'>
              <img src={react} alt="React illustration" />
              <h4>React</h4>
            </li>
            <li className='small-card'>
              <img src={wordpress} alt="WordPress illustration" />
              <h4>WordPress</h4>
            </li>
          </ul>
        </section>

        <hr />

        <section id="about">
          <h2>&#11208; About me</h2>
          <article className='row'>
            <img src={own_image} alt="" />

            <div className="column">
              <h3>Hi,</h3>
              <p>I&apos;m a web developer and ICT specialist from Finland. I have a passion for creating things and solving problems.
                I have degree in identity & access management, and in web development. I have long working background in technical sales and customer service. 
                I&apos;m always eager to learn new things and improve my skills. My motto is &ldquo;Learn somehting new every day&ldquo;.</p>
              <p>When I&apos;m not coding, I like to spend time in nature taking photos. I also enjoy playing video games and watching movies.</p>
            </div>
          </article>
        </section>

        <hr />

        <section id="contact">
          <h2>&#11208; Contact me</h2>

          <div className="duo-grid">
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend><FontAwesomeIcon icon={faMailBulk} /> Send a message</legend>

                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder='Your name...'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    placeholder='Phone number...'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder='Your email...'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    placeholder='Subject...'
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder='Threats, offers, or just say hi...'
                    rows={4}
                  />
                </div>
                
                <br />
                <button type="submit"><FontAwesomeIcon icon={faMailForward} /><p>Send message</p></button>
              </fieldset>
            </form>

            <fieldset>
              <legend><FontAwesomeIcon icon={faAt} /> Alternatives</legend>
              <p>You can send me a message via LinkedIn.</p>
              <a href="https://www.linkedin.com/in/timo-anjala-iam/" target='_blanc'><button><FontAwesomeIcon icon={faLinkedin} /><p>LinkedIn</p></button></a>
              <br />
              <p>
                I&apos;m always open for good cup of coffee, so if your local in Finland or visiting, lets arrange meeting with great cup of brew <FontAwesomeIcon icon={faCoffee} />. 
                Send a message with subject &ldquo;Coffee&ldquo; / &ldquo;Kahvit&ldquo;.
              </p>    
            </fieldset>
          </div>
        </section>
      </main>

      <footer>
        <button onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon icon={faArrowUp} /><p>Back to top</p><FontAwesomeIcon icon={faArrowUp} /></button>
        <p>&copy; {getCurrentYear()} Timo Anjala</p>
      </footer>
    </>
  )
}

export default App
