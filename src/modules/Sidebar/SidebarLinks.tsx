import React from "react";
import SidebarLink from "./SidebarLink";
import { SidebarCategories as categories } from "./SidebarCategories";
import { useRouter } from "next/router";

const SidebarLinks = () => {
  const router = useRouter();

  const { sport } = router.query;

  const isActive = (path: string) => {
    const single = path.split("/")[2];
    return sport === single;
  };

  return (
    <div className="flex flex-col space-y-6 mt-8">
      {categories.slice(0, 2).map((category, index) => (
        <SidebarLink
          key={index}
          category={category.label}
          path={category.path}
          isActive={isActive(category.path)}
        />

      ))}
      <hr className="border-t-2 border-LightBorder dark:border-DarkBorder" />
      {categories.slice(2).map((category, index) => (
        <SidebarLink
          key={index}
          category={category.label}
          path={category.path}
          isActive={isActive(category.path)}
        />

      ))}
    </div>
  );
};

export default SidebarLinks;
