"use client";
import { login } from '@/actions/login';
import { toast } from '@/components/ui/use-toast';
import { IFormdata } from '@/utils';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

export default function Auth() {
    const {register , handleSubmit , reset , formState:{errors}} = useForm<IFormdata>()
    const [error , setError] = useState<string | null>(null)
    const {push} = useRouter()
    const  onSumbit : SubmitHandler<IFormdata> = async (data) => {
        console.log(data);
       const response = await login(data)
       if (response.status == 404) {
        console.log(response);
        setError(response.error)
    }else{
        push('/generate-report')
        toast({
            title: "Success",
            description: "Login Successful",
          })
       }
    }
  return (
    <div className='w-full h-full flex gap-6 p-9'>
        <Image src={'/login-dark.png'} className='hidden md:flex md:w-1/2 h-screen' alt='Login Image' width={100} height={100}/>
        <form className='flex flex-col justify-center items-center gap-4 w-full md:w-1/2 h-screen' onSubmit={handleSubmit(onSumbit)}>
            <Image src={"/logo.png"} alt='Logo' width={100}  height={100}/>
            <input className='py-5 w-full border border-gray-600 rounded-xl bg-transparent px-3' type="email" placeholder='Enter Your Email' {...register("email")}/>
            <input className='py-5 w-full border border-gray-600 rounded-xl bg-transparent px-3' type="password" placeholder='Enter Your Email' {...register("password")}/>
            {
                error && <p className='text-red-500'>{errors.email?.message || error || errors.password?.message}</p>
            }
            <button className='bg-yellow-300 w-full py-5 rounded-lg font-bold text-xl'>Login</button>
            <p>Create Account ? <Link className='text-yellow-300 font-bold' href={'/register'}>Sign Up</Link></p>
        </form>
    </div>
  )
}
