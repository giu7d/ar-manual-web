import { FiBarChart2, FiLayers } from "react-icons/fi";

import { Dashboard } from "../pages/Dashboard";
import { Manuals } from "../pages/Manuals";

export const pages = [
  {
    icon: FiBarChart2,
    component: Dashboard,
    title: "Dashboard",
    route: "/",
  },
  {
    icon: FiLayers,
    component: Manuals,
    title: "Manuals",
    route: "/manuals",
  },
];
