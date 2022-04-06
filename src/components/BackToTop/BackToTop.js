// STYLES
import './BackToTop.css'

// HOOKS
import { useEffect, useState } from 'react'

const BackToTop = () => {
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
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