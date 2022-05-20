## POST `/task`

````ts
interface CreateTaskInput {
  body: {
    name: string,
    description?: string,
    status?: 'pendente' | 'andamento' | 'pronto';
  }
}

interface CreateTaskOutput {
  body: {
  _id: ObjectId,
  name: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
  status: 'pendente' | 'andamento' | 'pronto';
  }
}
````

## GET `/task`

````ts
interface task {
  _id: ObjectId,
  name: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
  status: 'pendente' | 'andamento' | 'pronto';
}

interface GetAllOutput {
  body: Array<task>;
}
````

## UPDATE `/task`

````ts
interface UpdateTaskInput {
  _id: ObjectId,
  name?: string,
  description?: string,
  status?: 'pendente' | 'andamento' | 'pronto';
}

interface UpdateTaskOutput {
  body: {
  _id: ObjectId,
  name: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
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

interface DeleteTaskOutput {
  body: {
  _id: ObjectId,
  name: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
  status: 'pendente' | 'andamento' | 'pronto';
  }
}
````