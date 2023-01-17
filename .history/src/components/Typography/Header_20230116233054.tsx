import { Bars3Icon } from '@heroicons/react/24/solid'
import React from 'react'
import NavLinks from './NavLinks'

function Header() {
  return (
    <header >
      <div className='p-4 flex text-center   border-b-2 '>

        <Bars3Icon className='h-8 w-8  cursor-pointer'/>
        <div className='ml-10'>

          {/* Nav Links */}
          <div className='ml-4 items-center'>

        <NavLinks  />
          </div>

        </div>
        <div className='flex space-x-2 justify-end ml-auto '>
          <div className='p-4'>
            Dark
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
