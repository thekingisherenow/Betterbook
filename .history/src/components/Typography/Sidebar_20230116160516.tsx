import React from 'react'
import { FireIcon, StarIcon } from '@heroicons/react/24/solid'

function Sidebar() {
    return (
        <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
            <div>
                <div className='flex flex-col space-y-2'>
                    <button className='flex items-center space-x-2 hover:text-blue-600'>
                        <FireIcon className='w-5 h-5' />
                        <p>Feautured</p>
                    </button>
                    <button className='flex items-center space-x-2 hover:text-blue-600'>
                        <StarIcon className='w-5 h-5' />
                        <p>Feautured</p>
                    </button>
                    <hr className='border-t-2 border-gray-900' />
                </div>

                <div>
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
