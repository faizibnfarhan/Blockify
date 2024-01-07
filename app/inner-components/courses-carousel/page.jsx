"use client"


import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const CoursesContainer = (props) => {
  return (
    <div className='lg:mx-14 xl:mx-14 cursor-pointer'>

            <div className='border w-[300px] p-5 pb-7 hover:shadow-xl rounded-lg'>
            <span className='absolute pt-2 pb-2 pl-3 pr-3  bg-gray-100 text-gray-500 text-[12px] m-3 font-medium rounded-full'>{props.tag}</span>
                    <Image src={props.img} alt='' width={300} height={300}/>
                    <p className='font-medium text-lg mt-6 ml-1'>
                        {props.title}
                    </p>
                    <div className='flex space-x-2 pt-4'>
                        <div className='flex items-center space-x-1'>
                            <StarIcon className="w-4 h-4 text-yellow-600"/>
                            <StarIcon className="w-4 h-4 text-yellow-600"/>
                            <StarIcon className="w-4 h-4 text-yellow-600"/>
                            <StarIcon className="w-4 h-4 text-yellow-600"/>
                            <StarIcon className="w-4 h-4 text-yellow-600"/>
                        </div>
                        <span className='text-gray-600'> {props.ratings}</span>
                    </div>                    
                    <p className='text-sm font-semibold pt-4 '>{props.price}</p>
            </div>
    </div>
  )
}

export default CoursesContainer
