import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='px-8 flex flex-row max-md:flex-col justify-between items-center py-4 '>
        <p>Copyright &copy;2025 Prince Daniel</p>
        <div className='flex flex-row gap-10'>
            <BsInstagram/>
            <BsTwitterX/>
            <BsGithub/>
            <BsWhatsapp/>
            <BsLinkedin/>
        </div>
    </div>
  )
}

export default Footer