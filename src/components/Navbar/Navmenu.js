// STYLES
import './Navmenu.css'

// COMPONENTS
import { Link } from 'react-scroll/modules'

// HOOKS
import { useNav } from '../../hooks/useNav'

const Navmenu = ({ closeNav }) => {
  const { setCurrentSection } = useNav()

  const handleClick = (sectionNum) => {
    setCurrentSection(sectionNum)
    closeNav()
  }

  return (
    <ul className="navmenu">
      <li><Link to="projects" spy={true} smooth={true} duration={500} offset={-70} onClick={() => handleClick(1)}>Projects</Link></li>
      <li><Link to="about" spy={true} smooth={true} duration={500} offset={-70} onClick={() => handleClick(2)}>About</Link></li>
      <li><Link to="resume" spy={true} smooth={true} duration={500} offset={-70} onClick={() => handleClick(3)}>Resume</Link></li>
      <li><Link to="contact" spy={true} smooth={true} duration={500} offset={-70} onClick={() => handleClick(4)}>Contact</Link></li>
    </ul>
  )
}

export default Navmenu