import React from 'react'
import { categories } from './constants'
import NavLink from './NavLink'
import { useRouter } from 'next/router'

function NavLinks() {
  const router = useRouter();
  console.log(router.query,"router.query")
    //const isActive is true if the url matches the current page.
    
  return (
    <nav>
      {categories.map((category)=>(
        <NavLink key={category.label} category={category.label} path={category.path} isActive={false} />
      ))}
    </nav>
  )
}

export default NavLinks
