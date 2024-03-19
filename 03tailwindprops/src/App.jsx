import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card1 from './components/Card1'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username : 'chinu',
    age : 22
  }

  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card1 username='chai' btnText='click me' />
     <Card1 username='chinu' />
    </>
  )
}

export default App
