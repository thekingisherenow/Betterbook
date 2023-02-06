import { FireIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import Typography from "../../components/Typography/Typography";
import { GiAmericanFootballBall } from "react-icons/gi";

interface SidebarLinkProps {
  category: string;
  path: string;
  isActive: boolean;
};
const SidebarLink: React.FC<SidebarLinkProps> = ({ category, path, isActive }) => {
  return (
    <>
      <Link href={path}>
        <button
          className={`flex items-center space-x-2 mx-5  hover:text-blue-500 ${isActive && "dark:text-DarkActionColor text-LightActionColor"
            }`}
        >
          <GiAmericanFootballBall className="w-8 h-8 mx-2" />
          <Typography variation="title1">{category}</Typography>
        </button>
      </Link>
    </>
  );
};

export default SidebarLink;
