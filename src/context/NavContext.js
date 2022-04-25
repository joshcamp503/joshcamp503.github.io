import { createContext, useReducer } from "react"


export const NavContext = createContext()

const navReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_SECTION':
      return { ...state, currentSection: action.payload }
    default: 
      return state
  }
}

export function NavProvider({ children }) {
  const [state, dispatch] = useReducer(navReducer, { currentSection: 0 })

  const setCurrentSection = (currentSection) => {
    dispatch({ type: 'CHANGE_CURRENT_SECTION', payload: currentSection})
  }

  return (
    <NavContext.Provider value={{...state, setCurrentSection }}>
      {children}
    </NavContext.Provider>
  )
}