
import React, { ComponentType } from "react";

interface IRouteItem {
  key: string,
  path: string,
  component: any,

  exact?: boolean,
  routes?: IRouteItem[],
}

let str: any = true;
console.log(str as string);

export default IRouteItem;
