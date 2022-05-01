// STYLES
import './Home.css'
import './crt.css'

// ICONS
import { FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { SiCss3 } from 'react-icons/si'

// COMPONENTS
import { Link } from 'react-scroll/modules'

// HOOKS
import { useMode } from "../../hooks/useMode"
import { useNav } from '../../hooks/useNav'

const Home = () => {
  const { mode } = useMode()
  const { setCurrentSection } = useNav()

  const delay = (sec) => {
    return {
      animationDelay: `${sec}s`
    }
  }

  const indent = (num) => {
    return {
      paddingLeft: `calc(2ch * ${num})`
    }
  } 

  const twoStyles = (func1, arg1, func2, arg2) => {
    const { paddingLeft } = func1(arg1)
    const { animationDelay } = func2(arg2)
    return {
      paddingLeft,
      animationDelay
    }
  }

  return (
    <div className={`home ${mode}`} >
      <div className="react-icon"><FaReact /></div>
      <div className="javascript-icon"><SiJavascript /></div>
      <div className="css-icon"><SiCss3 /></div> 
      <div className="html-icon"><FaHtml5 /></div> 
      <div className="content crt">
        <h3>
          <div className="container">
            <p className="typed" style={delay(1)}>const joshCampanella = {"{"}</p>
            <p className="typed" style={twoStyles(indent, 1, delay, 2)}>role: "web developer",</p>
            <p className="typed" style={twoStyles(indent, 1, delay, 3)}>languages: ["HTML", "CSS", "Javascript"],</p>
            <p className="typed" style={twoStyles(indent, 1, delay, 4)}>frameworks: ["React", "Express"],</p>
            <p className="typed" style={twoStyles(indent, 1, delay, 5)}>database: "MongoDB"</p>
            <span className="typed-last" style={delay(6)} >{"}"}</span>
          </div>
        </h3>
        <ul className="button-box" >
          <li><Link to="projects" onClick={() => setCurrentSection(1)} spy={true} smooth={true} duration={500} offset={-70}>SEE MY WORK</Link></li>
          <li><Link to="resume" onClick={() => setCurrentSection(3)} spy={true} smooth={true} duration={500} offset={-70}>SEE MY RESUME</Link></li>
          <li><Link to="contact" onClick={() => setCurrentSection(4)} spy={true} smooth={true} duration={500} offset={-70}>MESSAGE ME</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home
