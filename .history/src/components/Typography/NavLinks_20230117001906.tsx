import React, { useEffect } from 'react'
import { categories } from './constants'
import NavLink from './NavLink'
import { useRouter } from 'next/router'

function NavLinks() {
  const router = useRouter();
  
  //const isActive is true if the pathname in the url matches the  navlink's path.
  const isActive = (path:string)=>{
    console.log("router.pathname",router.pathname)
  console.log("path",path)
  console.log(router.pathname===path)
    return router.pathname===path
  }
    
  return (
    <nav>
      {categories.map((category)=>(
        <NavLink key={category.label} category={category.label} path={category.path} isActive={isActive(category.path)} />
      ))}
    </nav>
  )
}

export default NavLinks
