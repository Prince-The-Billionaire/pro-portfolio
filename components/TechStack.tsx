import React from 'react'
import Image from 'next/image'

interface props{
  img: string ,
  title: string,
 
}
const TechStack = ({img, title}:props) => {
  return (
        <div className='flex flex-row gap-4 border border-white/30 w-fit bg-white/10 justify-center items-center p-4 rounded-3xl'>
            <Image src={img} alt={title} width={40} height={40}/>
            <p className='text-black font-semibold text-lg'>{title}</p>
        </div>
  )
}

export default TechStack