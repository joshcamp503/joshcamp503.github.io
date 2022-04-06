import { useContext } from "react";
import { ModeContext } from '../context/ModeContext'

export const useMode = () => {
  const context = useContext(ModeContext)

  if(context === undefined) {
    throw new Error('useTheme must be used inside a ThemeProvider')
  }

  return context
}