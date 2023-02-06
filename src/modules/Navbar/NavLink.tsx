import Link from "next/link";
import React from "react";
import Typography from "../../components/Typography/Typography";

interface NavLinkProps  {
  category: string;
  path: string;
  isActive: boolean;
};

const  NavLink:React.FC<NavLinkProps> = ({ category, path, isActive }) => {
  return (
    <Link
      href={`${path}`}
      className={`cursor-pointer p-1 md:p-3  text-xs md:  
         ${isActive && "dark:text-DarkActionColor text-LightActionColor hover:text-blue-600  "}`}
    >
     <Typography variation="title1">{category}</Typography>
    </Link>
  );
}

export default NavLink;
