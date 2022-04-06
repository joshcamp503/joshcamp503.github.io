import { createContext, useReducer } from "react"


export const ModeContext = createContext()

const modeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      console.log(action.payload)
      return { ...state, mode: action.payload }
    default: 
      return state
  }
}

export function ModeProvider({ children }) {
  const [state, dispatch] = useReducer(modeReducer, { mode: 'dark' })

  const setMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode})
  }

  return (
    <ModeContext.Provider value={{...state, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}