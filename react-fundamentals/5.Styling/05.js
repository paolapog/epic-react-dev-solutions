// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// EX + EXTRA-1 + EXTRA-2

const Box = ({style, placeholder, size}) => {
    return (
        <div 
        className={`box box--${size}`} 
        style={{fontStyle: 'italic', ...style}}>{placeholder}</div>
    )
}

function App() {
  return (
    <div>
      <Box 
        size="small" 
        style={{backgroundColor: 'lightblue'}} 
        placeholder={'small lightblue box'} 
      />
      <Box 
        size="medium" 
        style={{backgroundColor: 'pink'}}
        placeholder={'medium pink box'}
      >
      </Box>
      <Box 
        size="large" 
        style={{backgroundColor: 'orange'}}
        placeholder={'large orange box'}
      >
      </Box>
    </div>
  )
}

export default App
