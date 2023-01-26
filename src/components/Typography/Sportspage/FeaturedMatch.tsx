import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

function FeaturedMatch() {
    return (
        <div className='flex flex-col  border border-gray-600 rounded-xl'>
            <div className='flex m-4'>
                <div className='relative w-10 h-10   '>
                    <Image className='object-cover' sizes='8vw'
                        src={"https://iili.io/Hli55Vs.png"} fill alt='favicon' />
                </div>
                <div className='ml-2 flex flex-col -space-y-1'>
                    <h3>Premier Leauge</h3>
                    <p className="text-xs text-gray-500 font-semibold">Group Stage</p>
                </div>
            </div>
            <div className='flex text-center mx-auto '>
                <div>
                    <div className='relative w-10 h-10 mx-auto   '>
                        <Image className='object-cover' sizes='8vw'
                            src={"https://iili.io/HluylyJ.png"} fill alt='favicon' />
                    </div>
                    <h2 >Barcelona </h2>
                </div>

                <h1 className='text-3xl px-2 font-semibold '>vs </h1>

                <div>
                    <div className='relative w-10 h-10 mx-auto  '>
                        <Image className='object-cover' sizes='8vw'
                            src={"https://iili.io/HluyEjR.png"} fill alt='favicon' />
                    </div>
                    <h2> Chelsea</h2>
                </div>
            </div>
            <div className='flex space-x-2 text-xs  mt-2 mx-auto text-center font-semibold '>
                <p className='box w-10 text-center'>
                    <StarIcon className='w-5 h-4 m-auto' />
                </p>
                <p className='box w-10'>1.83</p>
                <p className='box w-10 '>2.40</p>
                <p className='box w-10 '>1.59</p>
            </div>

            <hr className='border-t-2 border-gray-600 mt-5' />
            <div className=' mx-auto  text-center  cursor-pointer px-5 py-4  '>
                Match Details
            </div>
        </div>
    )
}

export default FeaturedMatch