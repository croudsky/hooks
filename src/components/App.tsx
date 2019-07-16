import React, { useState, useReducer, MouseEvent, FC } from "react";
import Event from "./Event";
import reducer from "../reducers";
import "bootstrap/dist/css/bootstrap.min.css";

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const defaultAction = {
    type: "",
    id: 0,
    title: "",
    body: ""
  };

  const addEvent = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({
      ...defaultAction,
      type: "CREATE_EVENT",
      title,
      body
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({
      ...defaultAction,
      type: "DELETE_ALL_EVENTS"
    });
  };

  return (
    <div className="container-fluid">
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

        <button className="btn btn-primary" onClick={addEvent}>
          イベントを作成する
        </button>
        <button className="btn btn-danger" onClick={deleteAllEvents}>
          全てのイベントを削除する
        </button>
      </form>

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
              index: number
            ) => {
              return <Event key={index} event={event} dispatch={dispatch} />;
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
