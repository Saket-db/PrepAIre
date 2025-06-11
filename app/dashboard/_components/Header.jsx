'use client'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {

    const path=usePathname();
    useEffect(() => {
        console.log(path);
    }, []);

  return (
    <div className='flex justify-between items-center p-2 shadow-sm bg-secondary'>
      <Image src="https://res.cloudinary.com/dyy1u7wvc/image/upload/v1749643411/Logo_Name-removebg-preview_s1qh8c.png" alt="Logo" width={160} height={100}/>
      <ul className='hidden md:flex gap-4 text-lg font-semibold'>
        <li className={`text-primary hover:text-blue-700 hover:font-bold  transition-all cursor-pointer ${path === '/dashboard'&&'font-bold underline text-blue-700'}`}>Dashboard</li>
        <li className={`text-primary hover:text-blue-700 hover:font-bold  transition-all cursor-pointer ${path === '/dashboard/prep' ? 'font-bold underline text-blue-700' : ''}`}>Start Preparing</li>
        <li className={`text-primary hover:text-blue-700 hover:font-bold  transition-all cursor-pointer ${path === '/dashboard/premium' ? 'font-bold underline text-blue-700' : ''}`}>Premium</li>
        <li className={`text-primary hover:text-blue-700 hover:font-bold  transition-all cursor-pointer ${path === '/dashboard/how-it-works' ? 'font-bold underline text-blue-700' : ''}`}>How it works?</li>
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header
