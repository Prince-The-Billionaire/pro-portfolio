import React from 'react'
import Image from 'next/image'
const Platforms = () => {
    const platforms = [
        {
            title: 'cloudinary',
            image:'/cloudinary.png'
        },
        {
            title:'hostinger',
            image:'/hostinger.png'
        },
        {
            title:'vercel',
            image:'/vercel.png'
        },
        {
            title:'godaddy',
            image:'/godaddy.png'
        }
    ]
  return (
    <div className='flex flex-row max-md:grid max-md:flex-col max-md:flex max-md:justify-center justify-around mt-12'>
       {platforms.map((item,index) => (
        <div key={index} className='flex flex-row items-center gap-5'>
            <Image src={item.image} alt={item.image} width={40} height={40}/>
            <p className='text-xl font-bold max-md:text-lg'>{item.title}</p>
        </div>
       ))} 
    </div>
  )
}

export default Platforms