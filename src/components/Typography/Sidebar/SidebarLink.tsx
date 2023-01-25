import { FireIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

type Props = {
  category: string,
  path: string,
  isActive: boolean
}
const SidebarLink = ({ category, path, isActive }: Props) => {
  return (
    <>
      <Link href={path}><button
        className={`flex items-center space-x-2   hover:text-blue-500 ${isActive && "text-blue-500"}`}
      >
        <FireIcon className='w-5 h-5' />
        <p className='font-bold'>{category}</p>
      </button></Link>
    </>
  )
}

export default SidebarLink
