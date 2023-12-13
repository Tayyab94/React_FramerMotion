import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './components/background'
import Forground from './components/forground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative w-full h-screen bg-zinc-500'>
        <Background />
        <Forground />
      </div>
    </>
  )
}

export default App
