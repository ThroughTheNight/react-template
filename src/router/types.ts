
import React, { FC, ComponentType } from "react";

interface IChildrenProps {
  [key: string]: any,
}

 interface IRouteItem {
  key: string,
  path: string,
  component: FC<IChildrenProps> | ComponentType<IChildrenProps>,

  exact?: boolean,
  routes?: IRouteItem[],
}

export default IRouteItem;
