// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

//EX + EXTRA-1-2-3-4

import * as React from 'react'

const countReducer = (state, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {count: state.count + action.step}
    default:
      throw new Error(`Unsopported action type : ${action.type}`)
  }
}

function Counter({step = 1, initialCount = 0}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
