
import React from 'react'
import TechStack from './TechStack'
import { IoCall } from 'react-icons/io5'

const Advantages = () => {
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
    <div className='padding flex flex-col justify-center items-center'>
        <div className='flex flex-row gap-10'>
            <div className='relative bg-image w-[800px] h-[600px] rounded-2xl '>
                <img src='/Button.png' className='absolute top-10 left-10'/>
                <img src='/Group.png' className='absolute top-50 right-20'/>
                <p className='w-[20rem] absolute bottom-10 ml-14 z-30 font-semibold text-2xl'>I prioritize speed of delivery, effective communication with clients, speed of site and fostering good relationship</p>
            </div>
            <div className='flex flex-col gap-10'>
              <div className='w-[500px] h-[250px] border-white/20 border bg-white/10 rounded-3xl p-8'>
                <p className='font-bold text-xl '>I&apos;m very flexible with time zone communications</p>
              </div>
              <div className='w-[500px] h-[250px] gap-4 flex overflow-clip  flex-row border-white/20 border bg-white/10 rounded-3xl p-8'>
                <div className='font-bold'>
                  <p className='text-2xl '>I constantly try to improve</p>
                  <p className='text-xl'>My Tech Stack</p>
                </div>
                
                <div className='flex flex-col gap-2 -mt-16 '>
                  {stack.map((item) => (
                      <TechStack img={item.img} key={item.title} title={item.title}/>
                  ))}
                </div>
              </div>
            </div>
            
        </div>
        <img src='/imagepro.png'  className='object-cover w-[20%] h-[24rem] object-top-right '/>
        <div className='div-image rounded-3xl p-10 flex flex-col gap-3 items-center cursor-pointer  justify-center'>
          
          <p className='font-semibold text-xl'>Do you want to start a project together?</p>
          <div className='flex flex-row gap-2 cursor-pointer items-center justify-center bg-white/10 w-fit p-2 rounded-xl backdrop-blur-lg shadow-amber-100 inset-shadow'>
            <IoCall color='white' size={28} />
            <p className=' font-medium font-sans text-lg' >Contact Me</p>
          </div>
        </div>
    </div>
  )
}

export default Advantages