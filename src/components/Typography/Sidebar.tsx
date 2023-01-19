import React, { LegacyRef, forwardRef, useState } from 'react'
import { FireIcon, StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

type Props = {
    showNav: boolean
}
const Sidebar = forwardRef<HTMLDivElement, Props>(({ showNav }: Props, ref) => {

    return (
        <div ref={ref}
            className='fixed text-sm border h-full  shadow-sm  w-36 
             bg-gray-100 dark:bg-zinc-900  z-20 dark:border-gray-500'>

            <div className=' flex flex-col'>

                {/* Image */}
                <div className='relative w-full h-36  '>
                    <Image className='object-cover' sizes='10vw'
                        src={"https://iili.io/HamHDdJ.jpg"} fill alt='favicon' />
                </div>

                <div className='flex flex-col  p-5 space-y-3 font-semibold mb-4 '>
                    <button className='flex items-center space-x-2 hover:text-blue-600'>
                        <FireIcon className='w-5 h-5' />
                        <p>Featured</p>
                    </button>
                    <button className='flex items-center space-x-2 hover:text-blue-600'>
                        <StarIcon className='w-5 h-5' />
                        <p>Favourites</p>
                    </button>
                </div>
                <hr className='border-t-2 border-gray-500' />

                <div className='flex flex-col space-y-5  p-5 font-semibold mb-4'>
                    <button className='flex items-center space-x-2 hover:text-blue-600'>
                        <FireIcon className='w-5 h-5' />
                        <p>Soccer</p>
                    </button>
                    <button className='flex items-center space-x-2 hover:text-blue-600'>
                        <StarIcon className='w-5 h-5' />
                        <p>Football</p>
                    </button>
                    <button className='flex items-center space-x-2 hover:text-blue-600'>
                        <FireIcon className='w-5 h-5' />
                        <p>Basketball</p>
                    </button>
                    <button className='flex items-center space-x-2 hover:text-blue-600'>
                        <FireIcon className='w-5 h-5' />
                        <p>Tennis</p>
                    </button>
                    <button className='flex items-center space-x-2 hover:text-blue-600'>
                        <FireIcon className='w-5 h-5' />
                        <p>Baseball</p>
                    </button>
                </div>
            </div>
        </div>
    )

})

Sidebar.displayName = "Sidebar"

export default Sidebar