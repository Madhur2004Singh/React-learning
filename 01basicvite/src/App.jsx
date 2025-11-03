import { useState } from 'react' // ✅ ADD THIS LINE
import Youtube from './Youtube'

function App() {
  const [count, setCount] = useState(0)
  const username='Madhur';
  return (
    <>
    <h1>Vite react app {username} {7+9}</h1>
    <Youtube/>

    </>
  )
}

export default App
