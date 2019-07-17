/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IState {
  id: number;
  title: string;
  body: string;
}

export interface IStateOperation {
  description: string;
  operatedAt: string;
}

export interface IAction {
  type: string;
  title: string;
  body: string;
  id: number;
  description: string;
  operatedAt: string;
}
