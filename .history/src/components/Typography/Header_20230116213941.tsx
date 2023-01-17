import { Bars3Icon } from '@heroicons/react/24/solid'
import React from 'react'

function Header() {
  return (
    <header >
      <div className='p-10 flex text-center   border-b-2 '>
        <Bars3Icon className='h-8 w-8 cursor-pointer'/>
        <div className='ml-10'>
          Matches
        </div>
        <div className='justify-end ml-auto  '>
          <div>
            Dark Mode
            </div>
            <div>
              heyy
              </div>
        </div>
      </div>
    </header>
  )
}

export default Header
