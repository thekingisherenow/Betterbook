import { Bars3Icon } from "@heroicons/react/24/solid";
import React, { Dispatch, SetStateAction } from "react";
import NavLinks from "./NavLinks";
import DarkModeButton from "./DarkModeButton";
import Image from "next/image";

interface Props {
  navState: [boolean, Dispatch<SetStateAction<boolean>>];
}

const Navbar: React.FC<Props> = ({ navState: [showNav, setShowNav] }) => {
  return (
    <header>
      <div className={`w-full font-inter z-20 p-1 fixed flex text-center h-20 bg-gray-100
       dark:bg-DarkBackground  border-b border-LightBorder dark:border-DarkBorder ${showNav ? "" : ""} `}>
        <div className='flex space-x-6 '>
          <Bars3Icon
            onClick={() => setShowNav(!showNav)}
            className="h-11 w-11 p-3  text-center  cursor-pointer"
          />
          <div className="relative w-10 h-10">
            <Image
              className="object-cover"
              sizes="10vw"
              src={"/images/favIcon.png"}
              fill
              alt="favicon"
            />
          </div>
        </div>

        <div className="ml-24">
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
            <div className="relative h-12 w-12 rounded-full cursor-pointer ">
              <Image
                src={"/images/monkey.png"}
                className="object-cover rounded-full p-1"
                sizes="6vw"
                alt="avatar"
                fill
              />
            </div>
            <div className="flex flex-col text-sm text-left">
              <h2 className="text-gray-600 text-small">0*084</h2>
              <h2 className="">12.65 DAI</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
