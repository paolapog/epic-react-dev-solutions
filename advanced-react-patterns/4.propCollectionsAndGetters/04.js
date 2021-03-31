// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js
// EX + EXTRA-1

import * as React from 'react'
import {Switch} from '../switch'

// we can use this function instead of onClick: () => toggle(), because if we are not passing an onClick function, the app is gonna broken
// function callAll(...functions){
//   return (...args) => {
//     functions.forEach(fn => {
//       fn && fn(...args)
//     })
//   }
// }

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  let getTogglerProps = ({onClick, ...props}) => ({'aria-pressed': on, onClick: () => toggle(), ...props})
  return {on, getTogglerProps}
}

// function App() {
//   const {on, togglerProps} = useToggle()
//   return (
//     <div>
//       <Switch on={on} {...togglerProps} />
//       <hr />
//       <button aria-label="custom-button" {...togglerProps}>
//         {on ? 'on' : 'off'}
//       </button>
//     </div>
//   )
// }

function App() {
  const {on, getTogglerProps} = useToggle()
  return (
    <div>
      <Switch {...getTogglerProps({on})} />
      <hr />
      <button
        {...getTogglerProps({
          'aria-label': 'custom-button',
          onClick: () => console.info('onButtonClick'),
          id: 'custom-button-id',
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}
export default App

/*
eslint
  no-unused-vars: "off",
*/
