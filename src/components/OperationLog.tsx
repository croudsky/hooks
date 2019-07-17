import React, { FC } from 'react';
import { IStateOperation } from '../interfaces';

const Event: FC<{
  operationLog: IStateOperation;
}> = ({ operationLog = { description: '', operatedAt: '' } }) => (
  <tr>
    <td>{operationLog.description}</td>
    <td>{operationLog.operatedAt}</td>
  </tr>
);

export default Event;
