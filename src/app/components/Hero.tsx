"use client"
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <div className='py-10 w-full flex flex-col justify-center items-center  gap-7'>
        <h3 className='text-yellow-300 text-center font-bold font-serif'>Best AI Report Generator</h3>
        <h5 className='font-bold text-xl md:text-5xl text-center'>A 10X Faster Way To Write Your</h5>
       <h6 className='text-xl md:text-5xl font-serif text-center font-bold text-transparent bg-gradient-to-tr from-teal-400 to-yellow-300 bg-clip-text'><Typewriter  words={["Best Posible Output" , "Generate Report"]} loop={true} cursor={true} cursorStyle="|" cursorColor='white'/></h6>
       <Link className='text-xl text-center bg-gradient-to-tr from-purple-600 to-pink-500 font-bold p-3 md:py-5 md:px-4 rounded-2xl' href={'/generate-report'}>Start Generating - it's free</Link>
    </div>
  )
}
