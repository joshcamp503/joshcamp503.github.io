// STYLES
import './BackToTop.css'

// HOOKS
import { useEffect, useState } from 'react'
import { useNav } from "../../hooks/useNav"

const BackToTop = () => {  
  const { setCurrentSection } = useNav()
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    setCurrentSection(0)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // SCROLL TO TOP OF PAGE ON REFRESH
  window.onbeforeunload = function () {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {showButton && <div className="back-to-top">
        <button className="back-btn" onClick={scrollToTop}>Back to Top</button>
      </div>}
    </>
  )
}

export default BackToTop