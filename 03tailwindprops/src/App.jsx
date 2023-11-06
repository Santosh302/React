import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from  './components/Card.jsx'

function App() {
 

  return (
    <>
      <h1  className='bg-green-400 text-black p-4 rounded mb-4'>Tailwind test</h1>
      <Card  username="Santosh" />
      <Card />

    </>
  )
}

export default App
