// STYLES
import './Home.css'

// ICONS
import { FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { SiCss3 } from 'react-icons/si'

// COMPONENTS
import { Link } from 'react-scroll/modules'

// HOOKS
import { useMode } from "../../hooks/useMode"

const Home = () => {
  const { mode } = useMode()

  return (
    // ${mode} is for light mode/dark mode
    <div className={`home ${mode}`}>
      <div className="react-icon"><FaReact /></div>
      <div className="javascript-icon"><SiJavascript /></div>
      <div className="css-icon"><SiCss3 /></div> 
      <div className="html-icon"><FaHtml5 /></div> 
      <div className="content">   
        <h1>
          <div className="container"><div id="first-name" className={`slide-over ${mode}`}>Josh </div></div>
          <div className="container"><div id="last-name" className={`slide-down ${mode}`}>Campanella</div></div>
        </h1>
        <h3>
          <div className="container"><div id="function" className={`fade-in ${mode}`}>function</div></div>
          <div className="container"><div id="title" className={`typed ${mode}`}>WebDeveloper()</div></div>
        </h3>
        <ul className="button-box">
          <li><Link to="projects" spy={true} smooth={true} duration={500} offset={-70}>SEE MY WORK</Link></li>
          <li><Link to="resume" spy={true} smooth={true} duration={500} offset={-70}>SEE MY RESUME</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home
