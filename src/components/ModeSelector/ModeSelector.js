// STYLES
import './ModeSelector.css'

// ICONS
import { MdModeNight } from 'react-icons/md'

// HOOKS
import { useMode } from "../../hooks/useMode"

const ModeSelector = () => {
  const { setMode, mode } = useMode()

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`mode-selector ${mode}`}>
      <button onClick={toggleMode}>
        <MdModeNight size={"1.5rem"}/>
      </button>
    </div>
  )
}

export default ModeSelector
