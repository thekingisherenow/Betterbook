import Link from 'next/link';
import React from 'react'

type Props = {
    category: string;
    isActive: boolean;

}

function NavLink({category}:Props) {
  return (
    <Link href={'/${category}'}>
      {category}
    </Link>
  )
}

export default NavLink
