/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { FC, MouseEvent, useState, useContext } from 'react';
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const EventForm: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const defaultAction = {
    type: '',
    id: 0,
    title: '',
    body: '',
    description: '',
    operatedAt: '',
  };

  const addEvent = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({
      ...defaultAction,
      type: CREATE_EVENT,
      title,
      body,
    });

    dispatch({
      ...defaultAction,
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601(),
    });
    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    const result = window.confirm(
      '全てのイベントを本当に削除してもいいですか？',
    );
    if (result) {
      dispatch({
        ...defaultAction,
        type: DELETE_ALL_EVENTS,
      });
      dispatch({
        ...defaultAction,
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  const deleteAllLogs = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    const result = window.confirm(
      '全ての操作ログを本当に削除してもいいですか？',
    );
    if (result) {
      dispatch({
        ...defaultAction,
        type: DELETE_ALL_OPERATION_LOGS,
      });
    }
  };

  const unCreatable: boolean = title === '' || body === '';
  const unAllDeletable: boolean = state.events.length === 0;
  const unAllDeletableLogs: boolean = state.operationLogs.length === 0;

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            type="text"
            id="formEventTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={unAllDeletable}
        >
          全てのイベントを削除する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllLogs}
          disabled={unAllDeletableLogs}
        >
          全ての操作ログを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
