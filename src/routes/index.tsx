import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { pages } from "./pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {pages.map(({ component, route }) => (
          <Route key={route} path={route} component={component} exact />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
