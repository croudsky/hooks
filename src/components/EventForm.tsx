/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { Dispatch, FC, MouseEvent, useState } from 'react';
import { IState } from '../reducers';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';

const EventForm: FC<{
  state: IState[];
  dispatch: Dispatch<{ type: string; title: string; body: string; id: number }>;
}> = ({ state, dispatch }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const defaultAction = {
    type: '',
    id: 0,
    title: '',
    body: '',
  };

  const addEvent = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({
      ...defaultAction,
      type: CREATE_EVENT,
      title,
      body,
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
    }
  };

  const unCreatable: boolean = title === '' || body === '';
  const unAllDeletable: boolean = state.length === 0;

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
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
      </form>
    </>
  );
};

export default EventForm;
