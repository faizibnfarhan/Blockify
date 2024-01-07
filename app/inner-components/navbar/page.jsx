'use client'

import Link from 'next/link'
import {useState} from 'react'
import { LockClosedIcon, Squares2X2Icon, Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Button } from '@/component/ui/button'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  }

  return (
    <div className='w-100 h-[70px] bg-white border-b'>
    <div className='max-w-[1240px] m-auto h-full w-full justify-between flex items-center pl-6 pr-6 lg:pl-0 xl:pl-0 lg:pr-0 xl:pr-0'>
    {/** Left */}
  <Link href={"/"}>
    <div className='flex items-center'>
      <Squares2X2Icon className="h-6 w-6 text-teal-700"/>
      <p className='font-bold text-xl flex items-center'>Blocki <strong className='text-teal-700 text-bold'>Fy</strong></p>
    </div>
    </Link>
    {/** Middle */}
      <div className={toggle ? 'p-4 top-[65px] absolute h-100 pb-10 bg-white left-0 w-[100%] shadow-md px-8 lg:hidden xl:hidden flex flex-col  space-y-10' : ' hidden lg:items-center xl:items-center lg:flex xl:flex font-normal'}>
        <ul className={toggle ? 'flex flex-col space-y-8 text-sm pt-10' : 'flex flex-row space-x-8 text-sm'}>
          <li>
            <Link className='hover:text-teal-700' href={"./home"}>Home</Link>
          </li> 
          <li>
            <Link className='hover:text-teal-700' href={"./about"}>About</Link>
          </li> 
          <li>
            <Link className='hover:text-teal-700' href={"./courses"}>Courses</Link>
          </li> 
          <li>
            <Link className='hover:text-teal-700' href={"./instructors"}>Instructors</Link>
          </li> 
          <li>
            <Link className='hover:text-teal-700' href={"./pricing"}>Pricing</Link>
          </li> 
          <li>
            <Link className='hover:text-teal-700' href={"./contact"}>Contact</Link>
          </li> 
        </ul>
        {/** Right */}
      <div className={toggle ? 'flex space-y-6 pt-6 flex-col ' :'hidden lg:flex-row xl:flex-row lg:flex items-center xl:flex ml-60'}>
        <Link href={'/'} className="hover:text-teal-700 font-medium mr-8 flex items-center">
          <LockClosedIcon className='w-4 h-4 mr-1'/>
          Login
        </Link>
        <Button variant="default" className={toggle ? "w-40 bg-teal-700 hover:bg-teal-500" :"bg-teal-700 hover:bg-teal-500"}>
          Start Free Trial
        </Button>
      </div>
      </div>
      <div className='flex lg:hidden xl:hidden' onClick={handleClick}>
        {
          toggle ? <XMarkIcon className='w-6 h-6 cursor-pointer hover:text-teal-700'/> : <Bars2Icon className='h-6 w-6 hover:text-teal-700 cursor-pointer'/>

        }
      </div>
    </div>
    </div>
    
  )
}

export default Navbar

