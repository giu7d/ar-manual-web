import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/manuals" component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
};
