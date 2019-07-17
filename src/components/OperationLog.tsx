import React, { FC } from 'react';

const Event: FC<{
  operationLog: { description: string; operatedAt: string };
}> = ({ operationLog = { description: '', operatedAt: '' } }) => (
  <tr>
    <td>{operationLog.description}</td>
    <td>{operationLog.operatedAt}</td>
  </tr>
);

export default Event;
