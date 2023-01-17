import React from 'react'
import { FireIcon, StarIcon } from '@heroicons/react/24/solid'

function Sidebar() {
    return (
        <div className='text-gray-500 text-sm border-r h-screen w-40 border-gray-500'>
            <div>
                <div className='flex flex-col  p-5 space-y-3 font-semibold mb-4'>
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

                <div className='flex flex-col space-y-3  p-5 font-semibold mb-4'>
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
}

export default Sidebar
