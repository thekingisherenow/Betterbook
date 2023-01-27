import React, { Dispatch, SetStateAction, forwardRef, useState } from "react";
import { Bars3Icon, FireIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import SidebarLinks from "./SidebarLinks";

interface Props {
  navState: [boolean, Dispatch<SetStateAction<boolean>>];
}

const Sidebar = forwardRef<HTMLDivElement, Props>(
  ({ navState: [showNav, setShowNav] }: Props, ref) => {
    return (
      <div
        ref={ref}
        className="fixed text-sm border border-t-0 h-full  shadow-2xl  w-40 
             bg-gray-100 dark:bg-zinc-900 z-50 dark:border-gray-500"
      >
        <div className=" flex flex-col text-z dark:text-gray-200 ">
          {/* Image */}
          <div className="flex space-x-6 border-b border-gray-300 h-14 ">
            <Bars3Icon
              onClick={() => setShowNav(!showNav)}
              className="h-11 w-11 p-3 mt-1 text-center  cursor-pointer"
            />
            <div className="relative w-10 h-10 mt-1  ">
              <Image
                className="object-cover"
                sizes="10vw"
                src={"https://iili.io/HlqHCP4.png"}
                fill
                alt="favicon"
              />
            </div>
          </div>

          <div className="flex flex-col  p-5 space-y-3 font-semibold mt-4 mb-4 ">
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <FireIcon className="w-5 h-5" />
              <p>Featured</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <StarIcon className="w-5 h-5" />
              <p>Favourites</p>
            </button>
          </div>
          <hr className="border-t-2 border-gray-300" />
          <div className="flex flex-col space-y-3  p-5 font-semibold mb-4">
            <SidebarLinks />
          </div>
        </div>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default Sidebar;
