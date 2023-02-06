import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center">
      {currentTheme === "dark" ? (
        <SunIcon
          onClick={() => setTheme("light")}
          className="h-14 w-20 p-1 cursor-pointer  border-x-2 border-LightBorder dark:border-DarkBorder "
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme("dark")}
          className="h-14 w-20 p-1 cursor-pointer  border-x-2 border-LightBorder dark:border-DarkBorder
           text-gray-900"
        />
      )}
    </div>
  );
}

export default DarkModeButton;
