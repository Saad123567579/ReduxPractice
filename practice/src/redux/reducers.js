import { INC, DEC, INC10, DEC10 } from './actions';

export default function reducer(state = { value: 10 }, action) {
  switch (action.type) {
    case DEC:
      return { value: state.value - 1 };
    case INC:
      return { value: state.value + 1 };
    case INC10:
      return { value: state.value + 10 };
    case DEC10:
      return { value: state.value - 10 };
    default:
      return state;
  }
}
