import React, { FC, useContext } from 'react';
import { IState } from '../interfaces';
import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const Event: FC<{
  event: IState;
}> = ({
  event = { id: 0, title: '', body: '', description: '', operatedAt: '' },
}) => {
  const { dispatch } = useContext(AppContext);
  const handleClickDeleteButton = () => {
    // eslint-disable-next-line no-alert
    const result = window.confirm(
      `イベント(id=${event.id})を本当に削除してもいいですか?`,
    );

    if (result) {
      dispatch({
        type: DELETE_EVENT,
        description: '',
        operatedAt: '',
        ...event,
      });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント（id=${event.id}）を削除しました。`,
        operatedAt: timeCurrentIso8601(),
        ...event,
      });
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
