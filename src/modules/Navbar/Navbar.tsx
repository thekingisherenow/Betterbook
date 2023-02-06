import { Bars3Icon } from "@heroicons/react/24/solid";
import React, { Dispatch, SetStateAction } from "react";
import NavLinks from "./NavLinks";
import DarkModeButton from "./DarkModeButton";
import Image from "next/image";
import Typography from "../../components/Typography/Typography";



const Navbar: React.FC = () => {
  return (
    <header>
      <div className="z-20 p-1  w-[120rem] flex text-center h-20 bg-gray-100
       dark:bg-DarkBackground  border-b border-LightBorder dark:border-DarkBorder  ">
  
        <div className="ml-60">
          {/* Nav Links */}
          <div className=" items-center p-2 w-36   ">
            <NavLinks />
          </div>
        </div>
        <div className="flex space-x-2 justify-end ml-auto mr-4  ">
          {/* DARK MODE BUTTON  */}
          <DarkModeButton />

          <div className="text-center flex items-center p-1 ">
            {/* Image  */}
            <div className="relative h-14 w-14 rounded-full cursor-pointer ">
              <Image
                src={"/images/monkey.png"}
                className="object-cover rounded-full p-1"
                sizes="6vw"
                alt="avatar"
                fill
              />
            </div>
            <div className="flex flex-col  text-left w-32">
              <Typography variation="title1">0*0a8...6cd</Typography>
              <Typography variation="title3">12.65 DAI</Typography>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
