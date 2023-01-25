import React from 'react'
import SidebarLink from './SidebarLink'
import { NavbarCategories as categories} from './NavbarCategories'
import { useRouter } from 'next/router';

const SidebarLinks =() => {
  const router = useRouter();

  const { sport } = router.query;
  
  const isActive = (path :string) => {
    const single = path.split("/")[2]
        return sport === single
  }

  return (<>
      {categories.map((category,index)=>(
        <SidebarLink key={index} category={category.label} path={category.path} isActive={isActive(category.path)}  />
      ))}
      </> 
  )
}

export default SidebarLinks
