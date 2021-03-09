import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import IfWrap from "components/if-wrap/IfWrap";
import IRouteItem from "./types";

interface IRouterConfig {
  routes: IRouteItem[],
  extraProps?: object,
}

export default function RenderRouter(props: IRouterConfig) {
  const { routes, extraProps } = props;
  return (
    <IfWrap when={routes}>
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          {
            routes.map((route, i) => (
              <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                render={(props) =>
                  <route.component {...props} {...extraProps} routes={route.routes} />
                }
              />
            ))
          }
        </Switch>
      </Router>
    </IfWrap>
  );
}