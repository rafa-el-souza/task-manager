export type TaskStatus = 'pendente' | 'andamento' | 'pronto';

export interface CreateTaskInput {
  name: string,
  description: string,
  status: TaskStatus;
}

export interface UpdateTaskInput extends CreateTaskInput{
  _id: string,
}

export interface DeleteTaskInput {
  _id: string,
}
