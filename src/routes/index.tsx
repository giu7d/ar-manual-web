import { observer } from "mobx-react-lite";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useStores } from "../hooks/useStores";
import { Login } from "../pages/Login";
import { RenderCanvas } from "../pages/RenderCanvas";

import { pages } from "./pages";

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/render/:folder/:file" component={RenderCanvas} exact />
        <Route path="/" component={Login} exact />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/render/:folder/:file" component={RenderCanvas} exact />
        {pages.map(({ component, route }) => (
          <Route key={route} path={route} component={component} exact />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export const Routes = observer(() => {
  const { globalStore } = useStores();

  if (!globalStore.account.token) {
    return <PublicRoutes />;
  }

  return <PrivateRoutes />;
});
