import React from "react";
import { observer } from "mobx-react-lite";
import { useRouteMatch, useHistory } from "react-router-dom";

import { useStores } from "../../../hooks/useStores";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { pages } from "../../../routes/pages";
import { SideBarVariants } from "./variants";
import { Wrapper } from "./styles";
import { AnimatePresence } from "framer-motion";

export const SideBar = observer(() => {
  const { globalStore } = useStores();
  const { path } = useRouteMatch();
  const history = useHistory();

  const handleNavigation = (path: string) => {
    history.push(path);
  };

  return (
    <AnimatePresence>
      <Wrapper
        initial={globalStore.navigationBar ? "expanded" : "collapsed"}
        animate={globalStore.navigationBar ? "expanded" : "collapsed"}
        exit={globalStore.navigationBar ? "expanded" : "collapsed"}
        transition={{
          bounce: {
            stiffness: 800,
            damping: 10,
          },
        }}
        variants={SideBarVariants}
      >
        <div className="content">
          {pages
            .filter(({ sidebar }) => sidebar === true)
            .map(({ icon, title, route }) => (
              <NavigationButton
                key={route}
                onClick={() => handleNavigation(route)}
                selected={path === route}
              >
                {icon({ size: 18 })}
                {globalStore.navigationBar && <span>{title}</span>}
              </NavigationButton>
            ))}
        </div>
        <div className="divider" />
      </Wrapper>
    </AnimatePresence>
  );
});
