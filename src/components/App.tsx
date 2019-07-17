import React, { useEffect, useReducer, FC } from 'react';
import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';
import reducer from '../reducers';
import AppContext from '../contexts/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const APP_KEY = 'appWithRedux';

const App: FC = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : { events: [], operationLogs: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
