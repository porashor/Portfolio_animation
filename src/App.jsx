import React from 'react'
import Navber from './Components/Navber'
import Home from './Components/Home'
import Project from './Components/Project'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Foother from './Components/Foother'

const App = () => {
  return (
    <div className='bg-[#141338] text-white'>
      <Navber/>
      <Home/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>
      <Foother/>
    </div>
  )
}

export default App
