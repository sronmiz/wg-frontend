import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router";

interface IRouterProvider {
  children: React.ReactNode;
}

export const RouterProvider: React.FC<IRouterProvider> = (props) => {
  const history = createBrowserHistory();
  return <Router history={history}>{props.children}</Router>;
};
