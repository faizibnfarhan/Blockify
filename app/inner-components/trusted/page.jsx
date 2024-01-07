import Image from 'next/image'
import React from 'react'



const Trusted = () => {
  return (
    <div className='text-center w-100 space-y-4 mb-8'>
        <h1 className='font-bold text-2xl'>
            Trusted by over 20,000 students around the globe 🌎 🇦🇺.
        </h1>
        <p className='text-gray-500 font-normal text-sm'>
            Leading instructors from biggest institutions come together to teach you blockchain.
        </p>
        <Image className='ml-auto mr-auto pt-7 pb-3' src={"/Frame.png"} width={450} height={450} alt='Trusted Institution'/>
    </div>
  )
}

export default Trusted
