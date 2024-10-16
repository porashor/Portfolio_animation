import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[90%] mx-auto py-1 md:py-2 lg:py-3 xl:py-4'>
      {children}
    </div>
  )
}

export default Container
