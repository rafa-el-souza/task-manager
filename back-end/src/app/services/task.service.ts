import { GenericService } from '.';

import { TaskModel } from '../models';

import { ZodTask } from '../helpers/validators';

import { CreateTaskInput, DeleteTaskInput, UpdateTaskInput } from '../helpers/types';

export class TaskService
  extends GenericService <
    ZodTask,
    CreateTaskInput,
    UpdateTaskInput,
    DeleteTaskInput
  > {
  constructor(
    model = new TaskModel(),
  ) { super(model); }

  create = async (obj: CreateTaskInput) => this.model.create({ ...obj });

  read = async () => this.model.read();

  update = async (obj: UpdateTaskInput) => this.model.update({ ...obj })
    .then(TaskService.notFound);

  delete = async (obj: DeleteTaskInput) => this.model.delete({ ...obj })
    .then(TaskService.notFound);
}
