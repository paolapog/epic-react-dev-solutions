// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// EX+EXTRA-1
const CountContext = React.createContext();

function CountProvider(props){
    const [count, setCount] = React.useState(0);
    const value = [count, setCount];
    return <CountContext.Provider value={value} {...props}></CountContext.Provider>
}

function useCount(){
    const context = React.useContext(CountContext)
    if(!context){
        throw new Error(`error on useCount hook, there is no context`)
    }
    return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
    </div>
  )
}

export default App
