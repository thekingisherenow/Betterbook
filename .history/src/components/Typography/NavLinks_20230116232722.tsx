import React from 'react'
import { categories } from './constants'
import NavLink from './NavLink'

function NavLinks() {

    //const isActive is true if the url matches the current page.
    
  return (
    <nav>
      {categories.map((category)=>(
        <NavLink key={category} category={category} isActive={false} />
      ))}
    </nav>
  )
}

export default NavLinks
