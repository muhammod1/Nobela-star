import React from 'react'
import { Link } from 'react-router-dom'
import logoAlone from '../assets/logoAlone.png'

import {ImFacebook} from 'react-icons/im'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className="max-w-[1400px] w-[92%] mx-auto mt-40 mb-20">
        <div>
            <img className='w-[50px] h-[50px]' src={logoAlone} alt="logo" />
        </div>
        <div className='mt-6 flex justify-between gap-20 laptop:gap-0 flex-col laptop:flex-row'>
            <div>
                <div className='font-[700] text-[32px] text-blue mb-5'>Coconoto</div>
                <div>
                    <p className='text-blue w-[90%] font-semibold'>Alpha Drive gives you secure access to all your files.</p>
                </div>
            </div>
            <div>
                <div className='font-[700] text-[20px] text-blue  mb-8'>Sitemap</div>
                <div className='flex flex-col gap-4 text-blue font-semibold'>
                    <Link>Home</Link>
                    <Link>Services</Link>
                    <Link>Products</Link>
                    <Link>Contact</Link>
                    <Link>Abouts Us</Link>
                </div>
            </div>

            <div>
                <div className='font-[700] text-[20px] text-blue  mb-7'>Social Media</div>
                <div className='flex gap-4 text-blue font-semibold'>
                    <ImFacebook className='w-[20px] h-[20px]' />
                    <FaTwitter className='w-[20px] h-[20px]'/>
                    <FaLinkedinIn className='w-[20px] h-[20px]'/>
                </div>
            </div>

          
        </div>
    </div>
  )
}

export default Footer