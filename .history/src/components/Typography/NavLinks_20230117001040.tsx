import React, { useEffect } from 'react'
import { categories } from './constants'
import NavLink from './NavLink'
import { useRouter } from 'next/router'

function NavLinks() {
  const router = useRouter();
  
  console.log(router.pathname)
  const isActive = (path:string)=>{
    return router.pathname===path
  }
    //const isActive is true if the url matches the current page.
    
  return (
    <nav>
      {categories.map((category)=>(
        <NavLink key={category.label} category={category.label} path={category.path} isActive={isActive(category.path)} />
      ))}
    </nav>
  )
}

export default NavLinks
