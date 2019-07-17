/* eslint-disable import/no-unresolved */
import React, { FC, useContext } from 'react';
import OperationLog from './OperationLog';
import AppContext from '../contexts/AppContext';

const OperationLogs: FC = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map(
            (
              operationLog: { description: string; operatedAt: string },
              index: number,
            ) => {
              // eslint-disable-next-line react/no-array-index-key
              return <OperationLog key={index} operationLog={operationLog} />;
            },
          )}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
