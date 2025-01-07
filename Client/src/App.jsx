import { useState } from 'react'
import './App.css'

function App() {

  const [cnt,setCnt] = useState(0);
  return (
    <>
      <button onClick={()=>setCnt(cnt+1)}>Increment Cnt</button>
      {" = "} {
        cnt
      }
    </>
  )
}

export default App
