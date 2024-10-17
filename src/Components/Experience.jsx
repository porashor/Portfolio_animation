import React from 'react'
import Container from './Container'
import Header from './Header'
import { experienceData } from '../assets/Data/data'

const Experience = () => {
  return (
    <div>
      <Container>
        {/* that is header section  */}
        <Header>Experience</Header>
        {/* main section  */}
        <div className='flex flex-col items-center justify-center gap-20 py-10'>
          {experienceData.map((item, index)=>(
            <div className='border border-green-400 rounded-lg min-h-[220px] flex flex-col items-center justify-center px-[50px] gap-2 shadow-[0_0_30px] shadow-green-400 bg-blue-900' key={index}>
              <h1 className='capitalize font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center '>{item.title}</h1>
              <h3 className='capitalize font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center '>{item.place}</h3>
              <h3 className='capitalize font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center  '>{item.secOne}</h3>
              <h1 className='capitalize font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center  '>{item.secTwo}</h1>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Experience
