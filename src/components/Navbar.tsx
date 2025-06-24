'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
const navbarItems=[
  {
    name:'Artists',
    link:'/artists'
  },
   {
    name:'Onboard Artist',
    link:'/onboard'
  },
   {
    name:'Dashboard',
    link:'/dashboard'
  }
]
const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false);
  return (
    <div className='bg-white shadow-md border-b border-gray-200 sticky top-0 z-50'>
        <header className="flex justify-between items-center p-4">
        <Link href="/"><h1 className="text-2xl font-bold">Artistly</h1></Link>
        <nav className="hidden md:block space-x-4">
          {
            navbarItems.map((item,index)=>(
              <Link key={index} href={item.link} className='hover:text-purple-500'>{item.name}</Link>
            ))
          }
        </nav>
        <div className='md:hidden'>
        {!openMenu ? ( <MdOutlineMenu className='text-black font-bold' onClick={()=>setOpenMenu(true)}/>):(<IoCloseSharp className='text-black font-bold' onClick={()=>setOpenMenu(false)}/>)}
        </div>
      </header>
      { openMenu && <nav className="md:hidden flex flex-col gap-[10px] w-full px-4 py-4">
          {
            navbarItems.map((item,index)=>(
              <Link key={index} href={item.link} className='hover:text-purple-500 border-b-[1px] border-black'>{item.name}</Link>
            ))
          }
        </nav>
       }
    </div>
  )
}

export default Navbar