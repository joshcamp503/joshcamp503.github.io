import { IconContext } from 'react-icons'

// COMPONENTS
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import BackToTop from './components/BackToTop/BackToTop';
import Contact from './components/Contact/Contact';
import About from './components/About/About'

// HOOKS
import { useNav } from "./hooks/useNav"
import { useMode } from "./hooks/useMode"
import { scroller } from 'react-scroll';

function App() {
  const { mode } = useMode()
  const { currentSection, setCurrentSection } = useNav()
  const sections = ['home', 'projects', 'about', 'resume', 'contact']

  const handleScroll = (e) => {
    e.stopPropagation()
    // DON'T SCROLL TO NEXT SECTION IF MOUSE IS ON 'PROJECTS' SECTION
    if (e.pageY > 650 && e.pageY < 1800 ) return false
    let nextSection = null
    if (e.deltaY > 0) {
      nextSection = currentSection + 1
    } else {
      nextSection = currentSection - 1
    }

    const errConditions = (nextSection < 0) || (nextSection > (sections.length - 1))
    if (errConditions) {
      nextSection = currentSection
      return
    }
    const scrollOptions = {
      spy: true,
      smooth: true,
      duration: 500,
      offset: -70
    }
    scroller.scrollTo(sections[nextSection], scrollOptions)
    setCurrentSection(nextSection)
  }

  return (
    <div className={`App ${mode}`} id="app" onWheel={handleScroll}>
      <IconContext.Provider value={{ size: "2rem" }}>
        <BackToTop />
        <Navbar />
        <Home name="home"/>
        <Projects name="projects" />
        <About name="about" />
        <Resume name="resume" />
        <Contact name="contact" />
      </IconContext.Provider>
    </div>
  );
}

export default App;
