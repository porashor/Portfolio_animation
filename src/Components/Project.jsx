import React from 'react'
import Container from './Container'
import Header from './Header'
import { projectData } from '../assets/Data/data'

const Project = () => {
  return (
    <div>
      <Container>
        {/* this is header section  */}
        <Header>Projects</Header>
        {/* main section here  */}
        <div className='w-[90%] mx-auto flex flex-wrap items-center justify-center gap-10 py-10'>
          {projectData.map((item, index)=>(
            <div key={index} className='h-fit pb-5 min-w-[300px] bg-slate-900 border border-yellow-400 shadow-xl shadow-yellow-400 rounded-xl'>
              {/* image section  */}
              <img src={item.img} alt="" className='w-[270px] h-[190px] object-cover mx-auto my-5 border-2 border-yellow-400 rounded-lg' />
              {/* text section  */}
              <div className='flex flex-col justify-center items-center gap-4 w-[90%] mx-auto text-center'>
                <h1 className='text-xl md:text-2xl font-semibold'>{item.title}</h1>
                <h1 className='text-sm md:text-md font-semibold'>{item.details}</h1>
                <div className="flex gap-2 items-center justify-center">
                  <button className='outline-none px-2 py-1 text-xl font-semibold bg-blue-500 rounded-lg'>{item.blubtn}</button>
                  <button className='outline-none px-2 py-1 text-xl font-semibold bg-yellow-500 rounded-lg'>{item.ylobtn}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Project
