// STYLES
import './Navbar.css'

// IMAGES
import hamburger from '../../assets/icon-hamburger.svg'

// COMPONENTS
import ModeSelector from '../ModeSelector/ModeSelector'
import Navmenu from './Navmenu'

// HOOKS
import { useMode } from "../../hooks/useMode"
import { useMediaSize } from '../../hooks/useMediaSize';
import { useState } from 'react'

const Navbar = ({ refList, navScroll }) => {
  const { mode } = useMode()
  const [showNav, setShowNav] = useState(false)

  const handleBurger = () => {
    showNav ? setShowNav(false) : setShowNav(true)
  }

  const closeNav = () => {
    console.log('closeNav fired')
    showNav ? setShowNav(false) : setShowNav(true)
  }

  // useMediaSize acts like a media query, closes hamburger nav @ 1200px
  useMediaSize(setShowNav)

  return (
    <div className="nav-container">
      <nav className={`navbar ${mode}`}>
        <img className="hamburger" src={hamburger} alt="hamburger" onClick={handleBurger}/>
        {!showNav && <Navmenu />}
        <ModeSelector />
      </nav>
      {showNav && <div className="navmenu-container">
        <div className="x-btn" onClick={closeNav} ><span>x</span></div>
        <Navmenu closeNav={closeNav} />
      </div>}
    </div>
  )
}

export default Navbar
