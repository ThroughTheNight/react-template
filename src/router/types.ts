
import React, { ComponentType } from "react";

interface IRouteItem {
  key: string,
  path: string,
  component: any,

  exact?: boolean,
  routes?: IRouteItem[],
}

export default IRouteItem;
