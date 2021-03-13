// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// EX + EXTRA-1 + EXTRA-2 +

// function UsernameForm({onSubmitUsername}) {
//   const inputUsername = React.useRef(null);

//   const handleSubmit = (event) => {
//       event.preventDefault();
//       onSubmitUsername(inputUsername.current.value);
//   }

//   const [error, setError] = React.useState('');
//   const [disable, setDisable] = React.useState(false);
//   const handleChange = (event) => {
//     const isValid = event.target.value === event.target.value.toLowerCase();
//     setError(isValid ? null : 'Username must be lower case')
//     setDisable(isValid ? null: true)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//     <span role="alert" style={{color: 'red'}}>{error}</span>
//       <div >
//         <label htmlFor={inputUsername}>Username:</label>
//         <input ref={inputUsername} onChange={handleChange} type="text"/>
//       </div>
//       <button type="submit" disabled={disable}>Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// EXTRA-3 

function UsernameForm({onSubmitUsername}) {
  const [username, setUsernameState] = React.useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      onSubmitUsername(username);
  }

  const handleChange = (event) => {
    setUsernameState(event.target.value.toLowerCase());
  }
  return (
    <form onSubmit={handleSubmit}>
      <div >
        <label htmlFor="username">Username:</label>
        <input id="username" value={username} onChange={handleChange} type="text"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
