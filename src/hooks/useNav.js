import { useContext } from "react";
import { NavContext } from '../context/NavContext'

export const useNav = () => {
  const context = useContext(NavContext)

  if(context === undefined) {
    throw new Error('useNav must be used inside a NavProvider')
  }

  return context
}