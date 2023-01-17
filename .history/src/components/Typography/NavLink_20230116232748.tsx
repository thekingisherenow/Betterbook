import Link from 'next/link';
import React from 'react'


type Props = {
    category: string;
    isActive: boolean;

}

function NavLink({category,isActive}:Props) {
  return (
    <Link href={'/${category}'}
        className={`cursor-pointer p-4  hover:font-bold hover:scale-110 transition-transform duration-200 ease-out ${isActive && 'text-blue-500  '}`}
    >
      {category}
    </Link>
  )
}

export default NavLink
