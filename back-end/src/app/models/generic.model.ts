import { Model as MongooseModel, Document } from 'mongoose';

import { ModelDTO } from '../helpers/types';

export abstract class GenericModel <
  Output,
  CreateInput,
  UpdateInput,
  DeleteInput
  > implements ModelDTO <
    Output,
    CreateInput,
    UpdateInput,
    DeleteInput
  > {
  constructor(
    protected dataBaseModel: MongooseModel<Output & Document>,
  ) { }

  abstract create(obj: CreateInput): Promise<Output>;

  abstract read(): Promise<Array<Output>>;

  abstract update(obj: UpdateInput): Promise<Output | null>;

  abstract delete(obj: DeleteInput): Promise<Output | null>;
}

export default GenericModel;
