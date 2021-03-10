import { IState } from "../types";

export const INCREMENT_COUNT: string = 'INCREMENT_COUNT';
export const DECREMENT_COUNT: string = 'DECREMENT_COUNT';

interface IAction {
  type: string,
  // payload:
}

const counts = (state: IState = { count: 0 }, { type }: IAction) => {
  switch (type) {
    case INCREMENT_COUNT:

      return state;

    case DECREMENT_COUNT:

      return state;

    default:
      return state;
  }
};

export default counts;