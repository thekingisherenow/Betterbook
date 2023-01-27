import React from "react";
import { categories } from "./constants";
import NavLink from "./NavLink";
import { useRouter } from "next/router";

const NavLinks = () => {
  const router = useRouter();

  //const isActive is true if the pathname in the url matches the navlink's path.

  const isActive = (path: string) => {
    const splitedPathname = router.pathname.split("/");
    return splitedPathname.some((item) => item === path.split("/")[1]);
  };

  return (
    <nav className="whitespace-nowrap">
      {categories.map((category) => (
        <NavLink
          key={category.label}
          category={category.label}
          path={category.path}
          isActive={isActive(category.path)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
