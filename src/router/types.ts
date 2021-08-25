
interface IRouteItem {
  key: string,
  path: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any,

  exact?: boolean,
  routes?: IRouteItem[],
}

export default IRouteItem;
