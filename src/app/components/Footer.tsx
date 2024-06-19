import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col gap-10 bg-black py-6 px-5 justify-center items-center'>
      <div className='w-full h-full flex flex-wrap  lg:flex-nowrap justify-evenly items-center  '>
      <div className='flex flex-col justify-center items-center'>
        <Image src={'/logo.png'} alt='Logo Image' width={100} height={100}/>
        <p className='w-40'>A Magical Tool to Optimize you content for the first know who you&apos;re targeting. Identify your target audience.</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h6 className='text-xl font-bold'>Gen AI</h6>
        <ul>
          <li><Link href={"/contact"} className='hover:text-yellow-300'>Contact</Link></li>
          <li><Link href={"/"} className='hover:text-yellow-300'>Blog</Link></li>
          <li><Link href={"/auth"} className='hover:text-yellow-300'>Sigin</Link></li>
          <li><Link href={"/register"} className='hover:text-yellow-300'>Register</Link></li>
        </ul>
      </div>
      <div className='flex flex-col justify-center items-center gap-6'>
        <h5 className='text-xl font-bold'>News & Update</h5>
        <form className='flex'>
        <input type="text" className='p-3 border text-black border-gray-700 rounded-md ' placeholder='Enter You Email'/>
        <button className='bg-yellow-200 text-xl p-5 font-bold'>Sumbit</button>
        </form>
      </div>
    </div>
      <h6>Copyright © 2024, AI report Generator. Design By Hammad.</h6>
    </div>
  )
}
