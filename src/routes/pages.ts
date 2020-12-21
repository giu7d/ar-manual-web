import { FiBarChart2, FiLayers } from "react-icons/fi";

import { Dashboard } from "../pages/Dashboard";
// Manuals
import { CreateManual } from "../pages/Manuals/CreateManual";
import { EditManual } from "../pages/Manuals/EditManual";
import { ListManuals } from "../pages/Manuals/ListManuals";

export const pages = [
  {
    icon: FiBarChart2,
    component: Dashboard,
    title: "Dashboard",
    route: "/",
    sidebar: true,
  },
  // Manuals
  {
    icon: FiLayers,
    component: ListManuals,
    title: "Manuals",
    route: "/manuals",
    sidebar: true,
  },
  {
    icon: FiLayers,
    component: CreateManual,
    title: "Manuals",
    // subtitle: "Manager",
    route: "/manuals/create",
    sidebar: false,
  },
  {
    icon: FiLayers,
    component: EditManual,
    title: "Manuals",
    // subtitle: "Manager",
    route: "/manuals/edit/:id",
    sidebar: false,
  },
];
