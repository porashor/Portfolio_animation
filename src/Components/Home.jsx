import React from 'react'
import Container from './Container'
import Links from "../assets/importent Links.txt"
const Home = () => {
  return (
    <div className='min-h-[500px] flex items-center'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-5'>
            {/* details section  */}
            <div className=''>
                <div className='border border-green-400 rounded-lg min-h-[220px] min-w-[540px] flex flex-col items-center justify-center px-5 gap-5 shadow-[0_0_30px] shadow-green-400 bg-blue-900 animate-pulse'>
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa fuga veritatis? Molestias, modi vitae minus aspernatur exercitationem officia quas itaque saepe assumenda dicta. Molestiae voluptas nemo soluta veritatis voluptatibus?</h1>
                  <button className='border-2 border-yellow-400 px-4 py-2 rounded-md'><a href={Links} download={Links.txt}>Download CV</a></button>
                </div>
            </div>
            {/* image section  */}
            <div className='flex items-center justify-center relative'>
              <div className='h-[400px] aspect-square bg-yellow-800 rounded-full opacity-[0.3] absolute animate-hug'></div>
              <div className='h-[200px] aspect-square bg-yellow-800 rounded-full border-4 border-blue-300 absolute animate-dance'></div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
