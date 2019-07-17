import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions';

export interface IState {
  id: number;
  title: string;
  body: string;
}

const events = (
  state: IState[] = [],
  action: { type: string; title: string; body: string; id: number },
) => {
  switch (action.type) {
    case CREATE_EVENT: {
      const postEvent = { title: action.title, body: action.body };
      const { length } = state;
      const id = length === 0 ? 1 : state[length - 1].id + 1;

      return [...state, { id, ...postEvent }];
    }
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;
