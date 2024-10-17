import React from 'react'
import Container from './Container'
import Header from './Header'
import { skillsData } from '../assets/Data/data'

const Skills = () => {
  return (
    <div>
      <Container>
        {/* this is header section  */}
        <Header>Skills</Header>
        {/* main section  */}
        <div className='w-[70%] m-auto flex flex-wrap gap-10 items-center justify-center py-10'>
          {/* code here  */}
          {skillsData.map((item, index)=>(
            <div key={index} className='min-w-[250px] px-[20px] py-[30px] min-h-[150px] bg-black border border-yellow-500 shadow-[0_0_30px] rounded-xl flex items-center justify-center flex-col gap-4 shadow-yellow-400'>
              {/* img section  */}
              <img src={item.img} alt="" className='w-[50px] aspect-auto' />
              {/* name section  */}
              <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold capitalize'>{item.text}</h1>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Skills
