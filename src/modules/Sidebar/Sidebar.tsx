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
        className="fixed text-sm border border-t-0 h-full font-inter  shadow-2xl  w-48 
             bg-gray-100 dark:bg-DarkBackground z-50 border-LightBorder dark:border-DarkBorder"
      >
        <div className=" flex flex-col text-z dark:text-gray-200 ">
          {/* Image */}
          <div className="flex space-x-6 border-b border-LightBorder dark:border-DarkBorder h-20 ">
            <Bars3Icon
              onClick={() => setShowNav(!showNav)}
              className="h-11 w-11 p-3 mt-1 text-center  cursor-pointer"
            />
            <div >
              <div className="relative w-10 h-10 mt-1  ">
                <Image
                  className="object-cover"
                  sizes="10vw"
                  src={"/images/favIcon.png"}
                  fill
                  alt="favicon"
                />
              </div>
            </div>
          </div>


          <div>
            <SidebarLinks />
          </div>
        </div>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default Sidebar;
