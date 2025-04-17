import React from 'react'
import TestimonyCard from './TestimonyCard'


const Testimony = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 mt-20 overflow-x-clip'>
            <p className='text-4xl font-bold max-md:text-center max-md:text-2xl'>Kind Words from <span className='text-purple-400'> satisfied clients</span></p>
            <div className='flex flex-row gap-10 max-md:flex-col max-md:items-center'>
                <TestimonyCard/>
                <TestimonyCard/>
                <TestimonyCard/>
            </div>
    </div>

  )
}

export default Testimony