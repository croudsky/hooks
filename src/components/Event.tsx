import React, { FC, useContext } from 'react';
import { IState } from '../reducers';
import { DELETE_EVENT } from '../actions';
import AppContext from '../contexts/AppContext';

const Event: FC<{
  event: IState;
}> = ({ event = { id: 0, title: '', body: '' } }) => {
  const { dispatch } = useContext(AppContext);
  const handleClickDeleteButton = () => {
    // eslint-disable-next-line no-alert
    const result = window.confirm(
      `イベント(id=${event.id})を本当に削除してもいいですか?`,
    );

    if (result) {
      dispatch({ type: DELETE_EVENT, ...event });
    }
  };

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
