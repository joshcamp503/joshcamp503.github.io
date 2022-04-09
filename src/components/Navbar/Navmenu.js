// STYLES
import './Navmenu.css'

// COMPONENTS
import { Link } from 'react-scroll/modules'

const Navmenu = ({ closeNav }) => {

  return (
    <ul className="navmenu">
      <li><Link to="projects" spy={true} smooth={true} duration={500} offset={-70} onClick={closeNav}>Projects</Link></li>
      <li><Link to="resume" spy={true} smooth={true} duration={500} offset={-70} onClick={closeNav}>Resume</Link></li>
      <li>About</li>
      <li><Link to="contact" spy={true} smooth={true} duration={500} offset={-70} onClick={closeNav}>Contact</Link></li>
    </ul>
  )
}

export default Navmenu