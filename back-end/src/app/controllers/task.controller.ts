import { GenericController } from '.';

import { TaskService } from '../services';

import { CreateTaskInput, DeleteTaskInput, UpdateTaskInput } from '../helpers/types';

import { ZodTask, zodCreateTaskSchema, zodUpdateTaskSchema } from '../helpers/validators';

export class TaskController
  extends GenericController <
    ZodTask,
    CreateTaskInput,
    UpdateTaskInput,
    DeleteTaskInput
  > {
  private _route: string;

  constructor(
    service = new TaskService(),
    route = '/task',
    _zodCreateTaskSchema = zodCreateTaskSchema,
    _zodUpdateTaskSchema = zodUpdateTaskSchema,
  ) {
    super(service, _zodCreateTaskSchema, _zodUpdateTaskSchema);
    this._route = route;
  }

  get route() { return this._route; }

  public create = async (obj: CreateTaskInput) => {
    this.validateCreateInput(obj);

    return this.service.create({ ...obj });
  };

  public read = async () => this.service.read();

  public update = async ({ _id, ...rest }: UpdateTaskInput) => {
    TaskController.validateId(_id);

    this.validateUpdateInput({ ...rest });

    return this.service.update({ _id, ...rest });
  };

  public delete = async ({ _id }: DeleteTaskInput) => {
    TaskController.validateId(_id);

    return this.service.delete({ _id });
  };
}
