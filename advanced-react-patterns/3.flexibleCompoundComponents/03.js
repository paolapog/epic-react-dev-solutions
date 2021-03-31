// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

// 🐨 create your ToggleContext context here
// 📜 https://reactjs.org/docs/context.html#reactcreatecontext
// EX + EXTRA-1
const ToggleContext = React.createContext()
// it useful on Components Dev tools to have a custom display name
ToggleContext.displayName = 'Toggle'

function Toggle({onToggle, children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  return <ToggleContext.Provider value={{on, toggle}}>
    {children}
  </ToggleContext.Provider>
}

function useToggle(){
  const context = React.useContext(ToggleContext)

	if(!context){
    throw new Error(`error on useToggle, there is no context, error: ${context}`)
  }

  return context
}

function ToggleOn({children}) {
  const {on} = useToggle()
  return on ? children : null
}

function ToggleOff({children}) {
  const {on} = useToggle()
  return on ? null : children
}

function ToggleButton(props) {
  const {on, toggle} = useToggle()
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}
// const App = () => <ToggleButton />

export default App

/*
eslint
  no-unused-vars: "off",
*/
