import Link from 'next/link';
import React from 'react'

type Props = {
  category: string;
  path: string;
  isActive: boolean;
}

const  NavLink = ({ category, path, isActive }: Props) => {
  return (
    <Link href={`${path}`}
      className={`cursor-pointer p-1 md:p-3  text-xs md:text-sm  font-semibold
         ${isActive && 'text-blue-500 hover:text-blue-600 font-bold '}`}
    >
      {category}
    </Link>
  )
}

export default NavLink
