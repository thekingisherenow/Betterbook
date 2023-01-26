import Image from 'next/image'
import React from 'react'

function Leauges() {
    return (
        <>
            <h1 className='mt-4 mb-2 font-semibold'> Soccer Leauges</h1>

            <div className='flex flex-col h-[250px] space-y-1 border border-gray-600 text-xs rounded-xl'>
                <div className='flex space-x-3 lg:space-x-6 cursor-pointer  py-2 '>
                    <div className='relative w-8 h-8 ml-2 lg:ml-4'>
                        <Image className='object-cover' sizes='8vw'
                            src={"https://iili.io/Hli55Vs.png"} fill alt='favicon' />
                    </div>
                    <h1 className='my-auto  text-left flex-grow'>Premiere Leauge</h1>
                    <h1 className='text-left px-5 my-auto '>5</h1>
                </div>

                <hr className='border-gray-600' />

                <div className='flex space-x-3 lg:space-x-6 cursor-pointer  py-2 '>
                    <div className='relative w-8 h-8 ml-2 lg:ml-4'>
                        <Image className='object-cover' sizes='8vw'
                            src={"https://iili.io/H0AC771.png"} fill alt='laliga-icon' />
                    </div>
                    <h1 className=' my-auto text-left  flex-grow'>La liga</h1>
                    <h1 className='text-left px-5 my-auto '>5</h1>
                </div>

                <hr className='border-gray-600' />

            </div>
        </>
    )
}

export default Leauges