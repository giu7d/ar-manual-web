import { observer } from "mobx-react-lite";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useStores } from "../hooks/useStores";
import { Login } from "../pages/Login";

import { pages } from "./pages";

export const Routes = observer(() => {
  const { globalStore } = useStores();

  return (
    <BrowserRouter>
      {globalStore.account.token ? (
        <Switch>
          {pages.map(({ component, route }) => (
            <Route key={route} path={route} component={component} exact />
          ))}
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={Login} exact />
          <Redirect to="/" />
        </Switch>
      )}
    </BrowserRouter>
  );
});
