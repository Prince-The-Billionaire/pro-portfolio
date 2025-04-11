import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <div className='relative text-white -mt-20 flex-col gap-8 items-center flex  justify-center min-h-screen '>
        <img src='/spotlight.png' className='absolute top-0 left-0'/>
        <img src='/spotlight.png' className='absolute top-0 left-0'/>
        <img src='/spotlight (1).png' className='absolute top-0 right-0 '/>
        <img src='/spotlight (1).png' className='absolute top-0 right-0 '/>
        <p className='text text-lg'>DYNAMIC WEB MAGIC WITH NEXT JS AND EXPO</p>
        <p className='text-5xl font-semibold'>Transforming Concepts into <br/> <span className='text-accent '>Seamless User Experiences</span></p>
        <p className='text-2xl text'>Hi! I&apos;m Prince, a Next.js and Expo Developer</p>
        <button className='gradient flex flex-row gap-2 cursor-pointer border-white/10 border-2 backdrop-blur-md  shadow-[3]  bg-gradient-to-r from-blue-500/25 to-white/1 rounded-xl p-4'>
          <p>Open to Work</p>
          <FiArrowUpRight size={20} />
        </button>
    </div>
  )
}

export default Hero