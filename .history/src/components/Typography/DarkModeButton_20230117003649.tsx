import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

function DarkModeButton() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }

  return (
    <div>
      Dark
    </div>
  )
}

export default DarkModeButton
