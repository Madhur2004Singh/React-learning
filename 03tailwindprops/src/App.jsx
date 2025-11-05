import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myarr=[1,2,3,4];

  return (
    <>
    {/* In this exercise username='Jayshu'--> this is the prop.props is the shortform for properties. */}
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind.</h1>
      <Card username='Jayshu' post='universe' Arr={myarr}/> {/* This is the way of object declaration in react as learned earlier.
         */}
      <Card/>
      <Card/>
    </>
  )
}

export default App
