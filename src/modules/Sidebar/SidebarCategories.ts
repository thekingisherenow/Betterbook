export interface Category  { label: string; path: string };

export const SidebarCategories: Category[] = [
  { label: "Featured", path: "/featured" },
  { label: "Favourites", path: "/favourites" },
  { label: "Soccer", path: "/matches/soccer" },
  { label: "Football", path: "/matches/football" },
  { label: "Basketball", path: "/matches/basketball" },
  { label: "Tennis", path: "/matches/tennis" },
  { label: "Baseball", path: "/matches/baseball" },
];
