import { UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Feedback = (props) => {
  return (
    <div className='mt-3'>
        <div className='border rounded-md p-4 max-w-[420px]'>
            <div className='mb-2 flex items-center space-x-4'>
                <UserCircleIcon className='w-10 h-10'/>
                <div className='block'>
                    <h2 className='text-md font-semibold'>{props.username}</h2>
                    <p className='text-sm font-normal text-teal-700'>{props.profession}</p>
                </div>
            </div>
            <p className='text-sm pt-3 font-normal text-gray-500 mb-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam obcaecati accusamus eius aliquid asperiores, ratione enim eligendi quibusdam amet facilis placeat, consequatur suscipit, autem voluptate officiis vero at reprehenderit exercitationem!
            </p>
        </div>
    </div>
  )
}

export default Feedback
