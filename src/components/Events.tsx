import React, { Dispatch, FC } from "react";
import Event from "./Event";
import { IState } from "../reducers";

const Events: FC<{
  state: IState[];
  dispatch: Dispatch<{ type: string; title: string; body: string; id: number }>;
}> = ({ state, dispatch }) => {
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
              index: number
            ) => {
              return <Event key={index} event={event} dispatch={dispatch} />;
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default Events;
