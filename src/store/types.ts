export interface IState {
  [key: string]: any
}

export interface IAction {
  type: string,
  payload?: any,
}