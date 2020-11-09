import React from "react";
import { observer } from "mobx-react-lite";

import { Wrapper } from "./styles";
import { useStores } from "../../../hooks/useStores";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { FiBarChart2, FiLayers } from "react-icons/fi";
import { useRouteMatch } from "react-router-dom";

const routes = [
  {
    icon: <FiBarChart2 size={18} />,
    title: "Dashboard",
    route: "/",
  },
  {
    icon: <FiLayers size={18} />,
    title: "Manuals",
    route: "/manuals",
  },
];

export const SideBar = observer(() => {
  const { globalStore } = useStores();
  const { path } = useRouteMatch();

  return (
    <Wrapper
      initial={{
        width: globalStore.navigationBar ? "250px" : "auto",
      }}
      animate={{
        width: globalStore.navigationBar ? "250px" : "auto",
      }}
    >
      {routes.map(({ icon, title, route }) => (
        <NavigationButton key={route} selected={path === route}>
          {icon}
          {globalStore.navigationBar && <span>{title}</span>}
        </NavigationButton>
      ))}
    </Wrapper>
  );
});
