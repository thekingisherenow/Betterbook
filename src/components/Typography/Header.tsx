import { Bars3Icon } from '@heroicons/react/24/solid'
import React, { Dispatch, SetStateAction } from 'react'
import NavLinks from './NavLinks'
import DarkModeButton from './DarkModeButton'
import Image from 'next/image'

interface Props {
  navState: [boolean, Dispatch<SetStateAction<boolean>>]
}

const Header: React.FC<Props> = ({ navState: [showNav, setShowNav] }) => {
  return (
    <header>
      <div className={`w-full p-1 fixed flex text-center h-12 bg-gray-100 dark:bg-zinc-900  transition-all duration-[400ms] border-b border-gray-300 ${showNav ? "pl-36" : ""}`}>
        <Bars3Icon onClick={() => setShowNav(!showNav)}
          className='h-11 w-11 p-3  text-center  cursor-pointer' />
        <div >
          {/* Nav Links */}
          <div className='ml-4 items-center p-2 w-36   '>
            <NavLinks />
          </div>
        </div>
        <div className='flex space-x-2 justify-end ml-auto mr-4  '>
          {/* DARK MODE BUTTON  */}
          <DarkModeButton />
          <div className='text-center flex items-center p-1 '>
            {/* Image  */}
            <div className='relative h-12 w-12 rounded-full '>
              <Image src={"https://iili.io/HamKXbj.jpg"}
                className='object-cover rounded-full p-1'
                sizes='6vw'
                alt="avatar" fill />
            </div>
            <div className='flex flex-col text-sm text-left'>
              <h2 className='text-gray-600 font-semibold'>0*084</h2>
              <h2 className='font-semibold'>12.65 DAI</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
