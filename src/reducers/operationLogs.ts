import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions';

const operationLogs = (
  state: { description: string; operatedAt: string }[] = [],
  action: {
    type: string;
    title: string;
    body: string;
    id: number;
    description: string;
    operatedAt: string;
  },
) => {
  switch (action.type) {
    case ADD_OPERATION_LOG: {
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt,
      };

      return [operationLog, ...state];
    }
    case DELETE_ALL_OPERATION_LOGS:
      return [];
    default:
      return state;
  }
};

export default operationLogs;
