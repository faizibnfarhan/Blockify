import { Button } from '@/component/ui/button'
import Image from 'next/image'
import React from 'react'

const Newsletter = () => {
  return (
    <div className='block  w-100 md:mx-8  space-y-12 md:space-y-0 lg:space-y-0 my-20 items-center md:flex lg:flex'>
      <div className='mr-0 md:mr-10 lg:mr-10'>
        <Image src="/join.png" width={400} height={400} alt='Faiz Khan'/>
      </div>
      <div>
        <h1 className='text-xl font-semibold'>
            Join the <span className='font-bold text-teal-700'>World&apos;s</span> largest <span className='font-bold text-teal-700'>Blockchain</span> learning platform
        </h1>
        <p className='text-sm font-normal text-gray-500 py-4'>
           Start learning today by registering with simple steps!!! 
        </p>
        <Button className="mt-4 bg-teal-700" variant="default">Signup for Free</Button>
      </div>
    </div>
  )
}

export default Newsletter
