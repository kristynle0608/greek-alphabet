import { useState } from 'react'
import Welcome from './components/Welcome'
import Card from './components/Card'
import './App.css'

function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      <div id="center">
        {!start ? (
          <Welcome onStart={() => setStart(true)} />
        ) : (
          <Card></Card>
        )}
      </div>
    </>
  )
}

export default App
