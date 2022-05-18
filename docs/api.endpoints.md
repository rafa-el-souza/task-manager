## GET `/tasks`

````ts
interface task {
  _id: ObjectId,
  name: string,
  description: string,
  createdAt: Date,
  status: 'pendente' | 'andamento' | 'pronto';
}

interface GetAllOutput {
  body: Array<task>; // maybe send it ordered
}
````

## POST `/task`

````ts
interface CreateTaskInput {
  body: {
  name: string,
  description: string,
  status: 'pendente' | 'andamento' | 'pronto';
  }
}

interface CreateTaskOutput {
  body: {
  _id: ObjectId,
  name: string,
  description: string,
  createdAt: Date,
  status: 'pendente' | 'andamento' | 'pronto';
  }
}
````

## DELETE `/task`

````ts
interface DeleteTaskInput {
  body: {
    _id: ObjectId,
  }
}

interface DeleteTaskInput {
  body: {
    _id: ObjectId,
  }
}
````

## UPDATE `/task`

````ts
interface UpdateTaskInput {
  _id: ObjectId,
  name: string,
  description: string,
  status: 'pendente' | 'andamento' | 'pronto';
}
````

## PATCH `/status`

````ts
interface UpdateTaskStatusInput {
  _id: ObjectId,
  status: 'pendente' | 'andamento' | 'pronto';
}
````

````ts
interface TaskModel {
  getAll: () => GetAllTasksOutput,
  create: (body: CreateTaskInput) => CreateTaskOutput,
  delete: (body: DeleteTaskInput) => ,
  update: (body: UpdateTaskInput) => ,
  updateStatus: (body: updateTaskStatusInput) => ,
}

interface TaskService {
  getAll: () => GetAllTasksOutput,
  create: (body: CreateTaskInput) => CreateTaskOutput,
  delete: (body: DeleteTaskInput) => ,
  update: (body: UpdateTaskInput) => ,
  updateStatus: (body: updateTaskStatusInput) => ,
}

interface TaskController {
  getAll: () => GetAllTasksOutput,
  create: (body: CreateTaskInput) => CreateTaskOutput,
  delete: (body: DeleteTaskInput) => ,
  update: (body: UpdateTaskInput) => ,
  updateStatus: (body: updateTaskStatusInput) => ,
}
````