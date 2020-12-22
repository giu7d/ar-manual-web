import { observer } from "mobx-react-lite";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useStores } from "../hooks/useStores";
import { Login } from "../pages/Login";
import { RenderCanvas } from "../pages/RenderCanvas";

import { pages } from "./pages";

export const Routes = observer(() => {
  const { globalStore } = useStores();

  if (!globalStore.account.token) {
    <Switch>
      <Route path="/render/:folder/:file" component={RenderCanvas} exact />
      <Route path="/" component={Login} exact />
      <Redirect to="/" />
    </Switch>;
  }

  return (
    <BrowserRouter>
      <Switch>
        {pages.map(({ component, route }) => (
          <Route key={route} path={route} component={component} exact />
        ))}
        <Route path="/render/:folder/:file" component={RenderCanvas} exact />
      </Switch>
    </BrowserRouter>
  );
});
