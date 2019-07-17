import React, { useReducer, FC } from 'react';
import EventForm from './EventForm';
import Events from './Events';
import reducer from '../reducers';
import AppContext from '../contexts/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
  const initialState = { events: [], operationLogs: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
