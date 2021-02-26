import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import { AuthWrapper } from "./AuthWrapper";

export const SwitchWrapper: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/" exact={true}>
        home
      </Route>
      <Route path="/log" exact={true}>
        <AuthWrapper>
          <Link to="/">log</Link>
        </AuthWrapper>
      </Route>
      <Route path="/goals" exact={true}>
        <AuthWrapper>
          <Link to="/">goals</Link>
        </AuthWrapper>
      </Route>
    </Switch>
  );
};
