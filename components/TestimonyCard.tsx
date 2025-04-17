import React from 'react'

const TestimonyCard = () => {
  return (
    <div className='w-[60%] max-md:w-[90%] p-6 max-md:p-2 bg-white/5 border border-white/20 rounded-xl gap-8 flex flex-col'>
                    <p className='w-[40rem] max-md:w-[16rem] max-md:text-xs max-md:text-wrap '>Collaborating and working with Prince was an amazing experience. His professionalism, speed of delivery and 
                        dedication to not only delivery a high end designed site but also one that loads at the speed of light.
                        Prince&apos;s excitement for every facet of development truly stands out. If you&apos;re seeking to elevate your website and elevate your 
                        brand, Prince is your main man
                    </p>
                    <div className='flex flex-row gap-4  items-center'>
                        <img src={'/picture.png'} alt='frank man' className='object-cover max-md:size-12 rounded-full object-man size-20'/>
                        <div className='flex flex-col gap-2'>
                            <p className='text-lg font-bold'>Michael Johnson</p>
                            <p className='text-white/75'>Director of AlphaStream Technologies</p>
                        </div>
                    </div>
                </div>
  )
}

export default TestimonyCard