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
import { useMode } from "./hooks/useMode"

function App() {
  const { mode } = useMode()

  return (
    <div className={`App ${mode}`}>
      <IconContext.Provider value={{ size: "2rem" }}>
        <BackToTop />
        <Navbar />
        <Home />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </IconContext.Provider>
    </div>
  );
}

export default App;
