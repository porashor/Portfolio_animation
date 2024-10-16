import React from 'react'
import Container from './Container'
import { Navdata } from '../assets/Data/data'

const Navber = () => {
    return (
        <div>
            <Container>
                <div className='flex items-center justify-between gap-3'>
                    {/* this is logo section  */}
                    <div className='text-2xl md:text-3xl lg:text-4xl uppercase font-bold'>Logo</div>
                    {/* this is navber section  */}
                    <nav className='hidden md:block'>
                        <ul className='flex items-center justify-center gap-4'>
                            {Navdata.map((item, index)=>(
                                <div key={index}>
                                    <a href={item.links} className='text-xl capitalize font-semibold py-3 hover:border-b-2 border-yellow-500 px-3'>{item.name}</a>
                                </div>
                            ))}
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>
    )
}

export default Navber
