
import IRouteItem from "router/types";
import { IAction } from "store/types";

export interface IRouterConfig {
  routes?: IRouteItem[],
  count?: number,
  onClickDispatch: (action: IAction) => void,
}