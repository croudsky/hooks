import React, { FC, useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events: FC = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {state.map(
            (
              event: { id: number; title: string; body: string },
              index: number,
            ) => {
              // eslint-disable-next-line react/no-array-index-key
              return <Event key={index} event={event} />;
            },
          )}
        </tbody>
      </table>
    </>
  );
};

export default Events;
