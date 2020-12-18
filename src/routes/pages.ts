import { FiBarChart2, FiLayers } from "react-icons/fi";

import { Dashboard } from "../pages/Dashboard";
import { ManualManager } from "../pages/ManualManager";
import { Manuals } from "../pages/Manuals";

export const pages = [
  {
    icon: FiBarChart2,
    component: Dashboard,
    title: "Dashboard",
    route: "/",
    sidebar: true,
  },
  {
    icon: FiLayers,
    component: Manuals,
    title: "Manuals",
    route: "/manuals",
    sidebar: true,
  },
  {
    icon: FiLayers,
    component: ManualManager,
    title: "Manuals",
    // subtitle: "Manager",
    route: "/manuals/manager",
    sidebar: false,
  },
];
