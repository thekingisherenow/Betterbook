import Link from 'next/link';
import React from 'react'


type Props = {
    category: string;
    path:string;
    isActive: boolean;

}

function NavLink({category,path,isActive}:Props) {
  console.log("isActive",isActive);
  return (
    <Link href={`${path}`} 
        className={`cursor-pointer p-4 text-sm text-gray-500 hover:text-gray-600 hover:font-bold hover:scale-110 transition-transform duration-200 ease-out font-semibold
         ${isActive && 'text-blue-500 font-bold '}`}
    >
      {category}
    </Link>
  )
}

export default NavLink
