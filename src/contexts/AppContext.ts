import { createContext, Dispatch } from 'react';

const initialDispatch: Dispatch<{
  type: string;
  title: string;
  body: string;
  id: number;
}> = (): void => {};

const AppContext = createContext({
  state: [{ id: 0, title: '', body: '' }],
  // eslint-disable-next-line no-undef
  dispatch: initialDispatch,
});

export default AppContext;
