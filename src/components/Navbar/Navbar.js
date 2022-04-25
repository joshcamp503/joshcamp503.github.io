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

const Navbar = () => {
  const { mode } = useMode()
  const [showNav, setShowNav] = useState(false)

  const handleBurger = () => {
    showNav ? setShowNav(false) : setShowNav(true)
  }

  const closeNav = () => {
    setShowNav(false)
  }

  // useMediaSize acts like a media query, closes hamburger nav @ 1200px
  useMediaSize(setShowNav)

  return (
    <div className="nav-container">
      <nav className={`navbar ${mode}`}>
        <img className="hamburger" src={hamburger} alt="hamburger" onClick={handleBurger}/>
        {!showNav && <Navmenu closeNav={closeNav} />}
        <ModeSelector />
      </nav>
      {showNav && <div className="navmenu-container">
        <div className="x-btn"><span onClick={closeNav} >x</span></div>
        <Navmenu closeNav={closeNav} />
      </div>}
    </div>
  )
}

export default Navbar
