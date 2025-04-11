import React from 'react'

const Navbar = () => {
  return (
    <div className='border flex flex-row w-fit backdrop-blur-2xl z-100 bg-white/10 gap-10 p-4 rounded-2xl sticky top-8 mx-auto '>
        <p className='hover:cursor-pointer hover:scale-110'>About</p>
        <p className='hover:cursor-pointer hover:scale-110'>Projects</p>
        <p className='hover:cursor-pointer hover:scale-110'>Testimonials</p>
        <p className='hover:cursor-pointer hover:scale-110'>Contact</p>
    </div>
  )
}

export default Navbar