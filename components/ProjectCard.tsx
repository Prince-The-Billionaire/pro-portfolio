import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'

interface props{
    title: string,
    desc: string,
    link: string,
    image: string,
}

const ProjectCard = ({title, image,desc, link}:props) => {
    const stack = [{
        img: '/nextjs.png',
        title: 'Next.js',
      },{
        img: '/tailwind.png',
        title:'tailwindcss'
      },{
        img:'/gsap.png',
        title:'gsap'
      },
      {
        img:'/three.png',
        title:'three'
      }]
  return (
    <div>
        <div className='p-4 rounded-2xl bg-white/10 gap-2 flex flex-col '>
            <Image src={image} width={580} height={400} alt={'apple'}/>
            <p className='text-3xl font-semibold'>{title}</p>
            <p className='text-white/60 w-[30rem] text-lg'>{desc}</p>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-5'>
                    {stack.map((item) => (
                        <Image src={item.img} width={40} height={40} alt={item.title}/>
                    ))}
                </div>
                <div className='flex flex-row gap-2 text-purple-300'>
                    <p>Check Live Site</p>
                    <FiArrowUpRight />
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProjectCard