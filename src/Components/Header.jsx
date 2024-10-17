import React from 'react'

const Header = ({children}) => {
  return (
    <div className='text-left text-xl md:text-2xl lg:text-4xl xl:text-5xl uppercase py-5 font-semibold'>
      {children}
    </div>
  )
}

export default Header
