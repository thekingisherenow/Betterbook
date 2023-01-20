import { ArrowRightOnRectangleIcon, TicketIcon } from '@heroicons/react/24/solid'
import React, { Dispatch, SetStateAction } from 'react'
import BetList from './BetList'

interface Props {
  betslipState: [boolean, Dispatch<SetStateAction<boolean>>]
}
const BetSlip: React.FC<Props> = ({ betslipState: [showBetslip, setShowBetslip] }) => {
  return (
    <div className='flex flex-col w-72  m-4 shadow-lg bg-gray-100
    dark:bg-zinc-900'>

      <div className='flex h-8 bg-gradient-to-l text-white from-orange-600 to-[#0e9493]'>
        <ArrowRightOnRectangleIcon onClick={() => setShowBetslip(!showBetslip)}
          className='w-8 h-8 cursor-pointer' />
        <div className='flex text-center m-auto '>
          <TicketIcon className='w-6 h-6' />
          <h1>Bet Slip</h1>
        </div>
      </div>

      <div >
        <BetList />
      </div>

      <div className='flex border-t border-gray-300 dark:border-gray-600 text-sm px-4 p-2 text-center justify-center
      items-center'>

        <div className='px-4  border-r border-gray-300 dark:border-gray-600 '>
          <h3 className=' font-semibold'>Total Rate</h3>
          <h3 className=' text-white font-bold bg-gradient-to-l from-orange-600 to-[#0e9493]  '>1.22</h3>
        </div>

        <div className='px-4 '>
          <h3 className='font-semibold'>Possible Winnings</h3>
          <h3 className='font-bold text-transparent  bg-clip-text bg-gradient-to-l from-orange-600 to-[#0e9493]'>538.22 DAI</h3>
        </div>

      </div>
    </div>
  )
}

export default BetSlip
