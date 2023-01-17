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
        className={`cursor-pointer p-4 text-sm text-gray-500
         ${isActive && 'text-blue-400 hover:text-blue-600 font-bold '}`}
    >
      {category}
    </Link>
  )
}

export default NavLink
