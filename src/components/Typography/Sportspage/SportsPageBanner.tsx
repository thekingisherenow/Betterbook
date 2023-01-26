import { TrophyIcon } from '@heroicons/react/24/solid'
import React from 'react'

function SportsPageBanner() {
    return (
        <div className='bg-[#1c92fe] rounded-md text-gray-100' >
            <div className='py-5 px-6 ml-4'>
                <div className='flex  '>
                    <p className='font-semibold'>Goerli Testnet Tournament. </p>
                    <TrophyIcon className='w-7 h-7 text-yellow-500' />
                </div>
                <p className='text-xs'>The winner of the Goerli testnet tournament gets 500 DAI.</p>
                <button className='bg-white text-[#1c92fe] px-7 py-3 rounded-lg mt-4 font-semibold'>More Details</button>
            </div>
        </div>
    )
}

export default SportsPageBanner