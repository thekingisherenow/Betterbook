import { Bars3Icon } from '@heroicons/react/24/solid'
import React from 'react'

function Header() {
  return (
    <header >
      <div className='p-10 flex justify-center items-center  border-b-2 '>
        <Bars3Icon className='h-8 w-8 cursor-pointer'/>
        <div>
          Matches
        </div>
      </div>
    </header>
  )
}

export default Header
