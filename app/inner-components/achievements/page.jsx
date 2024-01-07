import { AcademicCapIcon, HandThumbDownIcon, HandThumbUpIcon, UsersIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

const Achievements = () => {
  return (
    <div className='my-32 md:container lg:container md:mx-5 lg:mx-5'>
      <div className='mb-16 md:mb-2 lg:mb-2 space-y-4'>
        <h1 className='text-2xl font-bold'>
            Our Achievements
        </h1>
        <p className='text-sm font-normal text-gray-500'>
            Hybrid education has never been easy to go through with but we made it to
        </p>
      </div>
      <div className='block md:flex lg:flex items-center justify-between'>
        <div className='block space-y-12 mb-12'>
            <div className='block  md:flex lg:flex items-center min-w-[500px] justify-between'>
                <div className='flex items-center md:mb-1 mb-12 lg:mb-1'>
                    <div className='p-4 bg-teal-100 border rounded-md mr-5'>
                        <AcademicCapIcon className='w-8 h-8 text-teal-700'/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-xl font-semibold'>500</p>
                        <span className='text-sm font-normal text-gray-500'>Instructors</span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='p-4 bg-amber-100 border rounded-md mr-5'>
                        <UsersIcon className='w-8 h-8 text-amber-700'/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-xl font-semibold'>5000</p>
                        <span className='text-sm font-normal text-gray-500'>Students</span>
                    </div>
                </div>
            </div>
            <div className='block md:flex  lg:flex items-center min-w-[500px] justify-between'>
                <div className='flex  md:mb-1 mb-12 lg:mb-1 items-center'>
                    <div className='p-4 bg-red-100 border rounded-md mr-5'>
                        <VideoCameraIcon className='w-8 h-8 text-red-500'/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-xl font-semibold'>1500</p>
                        <span className='text-sm font-normal text-gray-500'>Lectures</span>
                    </div>
                </div>
                <div className='flex items-center -mr-5'>
                    <div className='p-4 bg-blue-100 border rounded-md mr-5'>
                        <HandThumbUpIcon className='w-8 h-8 text-blue-500'/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-xl font-semibold'>150,000</p>
                        <span className='text-sm font-normal text-gray-500'>Followers</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div className=''>
            <Image src="/girl.png" width={300} height={300} alt='Faiz' loading='lazy'/>
        </div>
      </div>
    </div>
  )
}

export default Achievements
