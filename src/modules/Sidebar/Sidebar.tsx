import React, { Dispatch, SetStateAction, forwardRef, useState } from "react";
import { Bars3Icon, FireIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <div
      className="w-[14.57rem]  border border-t-0 h-screen   shadow-2xl  -mt-20
             bg-gray-100 dark:bg-DarkBackground z-50 border-LightBorder dark:border-DarkBorder">
      <div className=" flex flex-col  dark:text-gray-200 ">
        <div className="flex flex-col justify-center items-center border-b border-LightBorder dark:border-DarkBorder h-20 ">
            <div className="relative w-16 h-11 mt-1  ">
              <Image
                className="object-cover"
                sizes="10vw"
                src={"/images/favIcon.png"}
                fill
                alt="favicon"
              />
          </div>
          <h1 className="text-DarkActionColor">BETTER BOOK</h1>
        </div>

        <div>
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
}


export default Sidebar