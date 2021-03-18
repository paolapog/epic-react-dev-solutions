// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

// EX + EXTRA-1 + EXTRA-2 + EXTRA-3

import * as React from 'react'

function useLocaleStorageState(getParam, fnParam){
    const [state, setState] = React.useState(() => window.localStorage.getItem(getParam) || fnParam)

    React.useEffect(() => {
        window.localStorage.setItem(getParam, state)
      }, [getParam, state])

    return [state, setState]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocaleStorageState('name', initialName)
  
  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App


// EXTRA-4 follow along with Kent

// import * as React from 'react'

// function useLocaleStorageState(getParam, fnParam = '', {serialize = JSON.stringify, deserialize = JSON.parse} = {}){
//     const [state, setState] = React.useState(() => {
//         const valueInLocaleStorage = window.localStorage.getItem(getParam)
//         if(valueInLocaleStorage){
//             deserialize(valueInLocaleStorage)
//         }
//         return typeof fnParam === 'function' ? fnParam() : fnParam
//     })

//     const prevParamRef = React.useRef(getParam)

//     React.useEffect(() => {
//         const prevParam = prevParamRef.current
//         if(prevParam !== getParam){
//             window.localStorage.removeItem(prevParam)
//         }

//         prevParamRef.current = getParam

//         window.localStorage.setItem(getParam, serialize(state))
//       }, [getParam, serialize, state])

//     return [state, setState]
// }

// function Greeting({initialName = ''}) {
//   const [name, setName] = useLocaleStorageState('name', initialName)
  
//   function handleChange(event) {
//     setName(event.target.value)
//   }

//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// function App() {
//   return <Greeting />
// }

// export default App
