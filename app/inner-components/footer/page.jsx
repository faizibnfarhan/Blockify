import { Button } from '@/component/ui/button'
import { Squares2X2Icon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='container mx-auto py-14 px-6 md:px-20 lg:px-20'>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-9">
        <div className="lg:col-span-4 col-span-12 space-y-3">
            <Link href="/">
              <div className='flex items-center'>
                <Squares2X2Icon className="h-6 w-6 text-teal-700"/>
                <p className='font-bold text-xl flex items-center'>Blocki <strong className='text-teal-700 text-bold'>Fy</strong></p>
              </div>
            </Link>
            <p className='text-sm font-normal text-gray-500 mt-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem maiores vero tenetur.
            </p>
            <p className='text-sm font-normal text-gray-500'>
              Email: info@blockify.edu.au
            </p>
            <p className='text-sm font-normal text-gray-500'>
              Phone: +123456789
            </p>
        </div>
        <div className="lg:col-span-2 md:col-span-4 col-span-12">
          <h4 className='text-md font-semibold'>
            Explore
          </h4>
          <ul className='list-none text-sm mt-4 text-gray-500 space-y-2'>
            <li className='cursor-pointer hover:text-teal-700'>
              Home
            </li>
            <li className='cursor-pointer hover:text-teal-700'>
              Courses
            </li>
            <li className='cursor-pointer hover:text-teal-700'>
              Instructors
            </li>
            <li className='cursor-pointer hover:text-teal-700'>
              Pricing
            </li>
          </ul>
        </div>
        <div className='lg:col-span-3 md:col-span-4 col-span-12'>
            <h4 className='text-md font-semibold'>
              Quick Link
            </h4>
            <ul className='list-none text-sm mt-4 text-gray-500 space-y-2'>
            <li className='cursor-pointer hover:text-teal-700'>
              About
            </li>
            <li className='cursor-pointer hover:text-teal-700'>
              FAQ
            </li>
            <li className='cursor-pointer hover:text-teal-700'>
              Contact
            </li>
            <li className='cursor-pointer hover:text-teal-700'>
              Follow
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12 space-y-3">
            <h4 className='text-md font-semibold'>
              Newsletter
            </h4>
            <p className="text-gray-500 text-sm font-normal">
              Signup here for exiciting news and trends related to blockchain and crypto currency.
            </p>
            <div className="flex flex-col w-52">
              <input className='py-3 my-2 w-100 outline-none pl-3 rounded-md text-sm pr-3 bg-gray-200 text-gray-700' placeholder="Enter your email" type='text'/>
              <Button className="bg-teal-700 mt-4" variant="default">Subscribe Now</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
