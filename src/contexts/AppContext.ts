import { createContext, Dispatch } from 'react';

const initialDispatch: Dispatch<{
  type: string;
  title: string;
  body: string;
  id: number;
  description: string;
  operatedAt: string;
}> = (): void => {};

const AppContext = createContext({
  state: {
    events: [{ id: 0, title: '', body: '' }],
    operationLogs: [{ description: '', operatedAt: '' }],
  },
  // eslint-disable-next-line no-undef
  dispatch: initialDispatch,
});

export default AppContext;
