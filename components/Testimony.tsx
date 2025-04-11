import React from 'react'
import Image from 'next/image'

const Testimony = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 mt-20 overflow-x-clip'>
            <p className='text-4xl font-bold '>Kind Words from <span className='text-purple-400'> satisfied clients</span></p>
            <div className='flex flex-row gap-10'>
                <div className='w-[60%] p-6 bg-white/5 border border-white/20 rounded-xl gap-8 flex flex-col'>
                    <p className='w-[40rem]'>Collaborating and working with Prince was an amazing experience. His professionalism, speed of delivery and 
                        dedication to not only delivery a high end designed site but also one that loads at the speed of light.
                        Prince's excitement for every facet of development truly stands out. If you're seeking to elevate your website and elevate your 
                        brand, Prince is your main man
                    </p>
                    <div className='flex flex-row gap-4  items-center'>
                        <img src={'/picture.png'} alt='frank man' className='object-cover rounded-full object-man size-20'/>
                        <div className='flex flex-col gap-2'>
                            <p className='text-lg font-bold'>Michael Johnson</p>
                            <p className='text-white/75'>Director of AlphaStream Technologies</p>
                        </div>
                    </div>
                </div>

                <div className='w-[60%] p-6 bg-white/5 border border-white/20 rounded-xl gap-8 flex flex-col'>
                <p className='w-[40rem]'>Collaborating and working with Prince was an amazing experience. His professionalism, speed of delivery and 
                    dedication to not only delivery a high end designed site but also one that loads at the speed of light.
                    Prince's excitement for every facet of development truly stands out. If you're seeking to elevate your website and elevate your 
                    brand, Prince is your main man
                </p>
                <div className='flex flex-row gap-4  items-center'>
                    <img src={'/picture.png'} alt='frank man' className='object-cover rounded-full object-man size-20'/>
                    <div className='flex flex-col gap-2'>
                        <p className='text-lg font-bold'>Michael Johnson</p>
                        <p className='text-white/75'>Director of AlphaStream Technologies</p>
                    </div>
                </div>
            </div>

            <div className='w-[60%] p-6 bg-white/5 border border-white/20 rounded-xl gap-8 flex flex-col'>
                <p className='w-[40rem]'>Collaborating and working with Prince was an amazing experience. His professionalism, speed of delivery and 
                    dedication to not only delivery a high end designed site but also one that loads at the speed of light.
                    Prince's excitement for every facet of development truly stands out. If you're seeking to elevate your website and elevate your 
                    brand, Prince is your main man
                </p>
                <div className='flex flex-row gap-4  items-center'>
                    <img src={'/picture.png'} alt='frank man' className='object-cover rounded-full object-man size-20'/>
                    <div className='flex flex-col gap-2'>
                        <p className='text-lg font-bold'>Michael Johnson</p>
                        <p className='text-white/75'>Director of AlphaStream Technologies</p>
                    </div>
                </div>
            </div>
            </div>
    </div>

  )
}

export default Testimony