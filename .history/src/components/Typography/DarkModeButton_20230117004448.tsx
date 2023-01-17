import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

function DarkModeButton() {
    const [mounted, setMounted] = useState(false)
    const {systemTheme,theme,setTheme} = useTheme()
    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }

    const currentTheme = theme==="system"? systemTheme : theme;

  return (
    <div className='border border-gray-500 p-4'>
    {currentTheme==='dark'?    
        <SunIcon 
        onClick={()=>setTheme("light")}
        className='h-8 w-8 cursor-pointer text-yellow-500'
         />
        :
        <MoonIcon 
        onClick={()=>setTheme("dark")}
        className='h-8 w-8 cursor-pointer text-gray-900'
        />

}
    </div>
  )
}

export default DarkModeButton
