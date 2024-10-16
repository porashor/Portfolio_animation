import React from 'react'
import Navber from './Components/Navber'
import Home from './Components/Home'
import Project from './Components/Project'

const App = () => {
  return (
    <div className='bg-[#141338] text-white'>
      <Navber/>
      <Home/>
      <Project/>
    </div>
  )
}

export default App
