import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

interface IProps {}

export const Routes: React.FC<IProps> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
};
