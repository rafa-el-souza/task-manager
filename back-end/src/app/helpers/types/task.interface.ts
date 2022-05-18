import { ObjectId } from 'mongoose';

export type IStatus = 'pendente' | 'andamento' | 'pronto';

export interface ICreateInput {
  name: string,
  description: string,
  status: IStatus;
}

export interface IDeleteInput {
  _id: ObjectId,
}

export interface IUpdateInput {
  _id: ObjectId,
  name: string,
  description: string,
  status: IStatus;
}

export interface IUpdateStatusInput {
  _id: ObjectId,
  status: IStatus;
}

export interface ITask {
  _id: ObjectId,
  name: string,
  description: string,
  createdAt: Date,
  status: IStatus;
}
