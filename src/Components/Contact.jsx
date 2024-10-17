import React from 'react'
import Container from './Container'
import Header from './Header'
import { FaFacebook } from 'react-icons/fa'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
import { SiGmail } from 'react-icons/si'

const Contact = () => {
  return (
    <div>
      <Container>
        {/* this is header section  */}
        <Header>Contact with me</Header>
        {/* main section going now  */}
        <div className='py-10 w-[70%] mx-auto flex items-center justify-center gap-5'>
          <div className='p-4 text-4xl bg-black rounded-full border border-yellow-400 hover:text-black hover:bg-blue-500 hover:shadow-[0_0_20px] hover:shadow-green-300'>
            <FaFacebook />
          </div>
          <div className='p-4 text-4xl bg-black rounded-full border border-yellow-400 hover:text-black hover:bg-blue-500 hover:shadow-[0_0_20px] hover:shadow-green-300'>
            <BsInstagram />
          </div>
          <div className='p-4 text-4xl bg-black rounded-full border border-yellow-400 hover:text-black hover:bg-blue-500 hover:shadow-[0_0_20px] hover:shadow-green-300'>
            <LiaLinkedin />
          </div>
          <div className='p-4 text-4xl bg-black rounded-full border border-yellow-400 hover:text-black hover:bg-blue-500 hover:shadow-[0_0_20px] hover:shadow-green-300'>
            <BsTwitter />
          </div>
          <div className='p-4 text-4xl bg-black rounded-full border border-yellow-400 hover:text-black hover:bg-blue-500 hover:shadow-[0_0_20px] hover:shadow-green-300'>
            <BsGithub />
          </div>
          <div className='p-4 text-4xl bg-black rounded-full border border-yellow-400 hover:text-black hover:bg-blue-500 hover:shadow-[0_0_20px] hover:shadow-green-300'>
            <SiGmail />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
