import { GenericModel } from './generic.model';

import { mongooseTaskModel } from '../../db';

import { ZodTask } from '../helpers/validators';

import { CreateTaskInput, DeleteTaskInput, UpdateTaskInput } from '../helpers/types';

export class TaskModel
  extends GenericModel <
    ZodTask,
    CreateTaskInput,
    UpdateTaskInput,
    DeleteTaskInput
  > {
  constructor(
    dataBaseModel = mongooseTaskModel,
  ) { super(dataBaseModel); }

  create = async (obj: CreateTaskInput) => this.dataBaseModel.create({ ...obj });

  read = async () => this.dataBaseModel.find();

  update = async ({ _id, ...rest }: UpdateTaskInput) => this.dataBaseModel
    .findOneAndUpdate({ _id }, { ...rest }, { returnOriginal: false });

  delete = async ({ _id }: DeleteTaskInput) => this.dataBaseModel.findOneAndDelete({ _id });
}

export default TaskModel;
