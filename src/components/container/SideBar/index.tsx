import React from "react";
import { observer } from "mobx-react-lite";
import { useRouteMatch, useHistory } from "react-router-dom";

import { useStores } from "../../../hooks/useStores";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { pages } from "../../../routes/pages";
import { SideBarVariants } from "./variants";
import { Wrapper } from "./styles";

export const SideBar = observer(() => {
  const { globalStore } = useStores();
  const { path } = useRouteMatch();
  const history = useHistory();

  const handleNavigation = (path: string) => {
    history.push(path);
  };

  return (
    <Wrapper
      initial={globalStore.navigationBar ? "expanded" : "collapsed"}
      animate={globalStore.navigationBar ? "expanded" : "collapsed"}
      transition={{ bounceStiffness: 600, bounceDamping: 10 }}
      variants={SideBarVariants}
    >
      {pages.map(({ icon, title, route }) => (
        <NavigationButton
          key={route}
          onClick={() => handleNavigation(route)}
          selected={path === route}
        >
          {icon({ size: 18 })}
          {globalStore.navigationBar && <span>{title}</span>}
        </NavigationButton>
      ))}
    </Wrapper>
  );
});
