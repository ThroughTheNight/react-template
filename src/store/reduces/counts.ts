import { IState } from "../types";

export const INCREMENT_COUNT: string = 'INCREMENT_COUNT';
export const DECREMENT_COUNT: string = 'DECREMENT_COUNT';

interface IAction {
  type: string,
  // payload:
}

const counts = (state: IState = { count: 0 }, { type }: IAction) => {
  const newState = Object.assign({}, state);
  switch (type) {
    case INCREMENT_COUNT:
      newState.count++;
      return newState;

    case DECREMENT_COUNT:
      newState.count--;
      return newState;

    default:
      return newState;
  }
};

export default counts;