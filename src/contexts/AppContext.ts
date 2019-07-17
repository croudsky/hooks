import { createContext, Dispatch } from 'react';
import { IAction } from '../interfaces';

const initialDispatch: Dispatch<IAction> = (): void => {};

const AppContext = createContext({
  state: {
    events: [{ id: 0, title: '', body: '' }],
    operationLogs: [{ description: '', operatedAt: '' }],
  },
  // eslint-disable-next-line no-undef
  dispatch: initialDispatch,
});

export default AppContext;
