import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ?
        <SunIcon
          onClick={() => setTheme("light")}
          className='h-10 w-12 p-1 cursor-pointer text-center border-x-2 dark:border-gray-600 text-yellow-500'
        />
        :
        <MoonIcon
          onClick={() => setTheme("dark")}
          className='h-10 w-12 p-1 cursor-pointer text-center border-x-2 dark:border-gray-600 text-gray-900'
        />

      }
    </div>
  )
}

export default DarkModeButton
