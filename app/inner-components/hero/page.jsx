"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import Image from "next/image"


const Hero = () => {
  return (
    <div className="w-full py-24  lg:mx-14 xl:mx-14 ml-auto">
        <div className="max-w-[1480px] m-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:space-y-1 xl:space-y-1 space-y-28">
            <div className=" space-y-6">
                <p className="text-md text-teal-700 font-semibold">START LEARNING BLOCKCHAIN</p>
                <h1 className="text-3xl font-bold">
                    Get Access To <span className="text-teal-700"> 1000+ </span> Courses <br/>
                    From <span className="text-teal-700"> 500+ </span> Instructors <br/>
                    And Institutions.
                </h1>
                <p className="text-sm font-normal text-gray-400">Just search out what you wanna learn and become so professional in crpyto.</p>
                <div className="max-w-[480px] justify-between pr-6 focus-within:shadow-md focus:shadow-md border flex items-center p-2 rounded-md">
                    <input type="text" className="w-[100%] mr-2 outline-none pl-1 text-sm pt-2 pr-2 pb-2 min-w-[240px]" placeholder="What you wanna learn aussies ?"/>
                    <MagnifyingGlassIcon className="hover:text-teal-700 cursor-pointer w-5 h-5" onClick={(e) => e.preventDefault()}/>
                </div>
            </div>
            <Image src="/hero-img.png" loading="lazy" alt="Hero" width={450} height={450}/>
        </div>
      
    </div>
  )
}

export default Hero
