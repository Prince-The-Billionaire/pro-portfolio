import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const CTA = () => {
  return (
    <div className=' div1-image flex flex-col gap-12 max-md:gap-4 items-center h-screen justify-center'>
      <p className='text-5xl font-semibold max-md:text-center max-md:text-xl'>Ready to take <span className='text-purple-300'>your</span> digital <br/> presence to the next level?</p>
      <p className='text-white/75 max-md:text-sm max-md:text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals</p>
      <button className='flex max-md:text-sm max-md:p-2 flex-row gap-2 cursor-pointer border-white/10 border-2 backdrop-blur-md  shadow-[3]  bg-gradient-to-r from-blue-500/25 to-white/1 rounded-xl p-4'>
        <p className='font-sans font-medium'>Contact Me Now</p>
        <FiArrowUpRight size={20} />
      </button>
    </div>
  )
}

export default CTA