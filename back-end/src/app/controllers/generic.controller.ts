import mongoose from 'mongoose';

import { ZodObject, ZodRawShape } from 'zod';

import { ControllerDTO, ServiceDTO } from '../helpers/types';

import { DomainError } from '../helpers/errors';

export abstract class GenericController <
  Output,
  CreateInput,
  UpdateInput,
  DeleteInput
  > implements ControllerDTO <
    Output,
    CreateInput,
    UpdateInput,
    DeleteInput
  > {
  abstract route: string;

  constructor(
    protected service: ServiceDTO<Output, CreateInput, UpdateInput, DeleteInput>,
    protected zodCreateSchema: ZodObject<ZodRawShape>,
    protected zodUpdateSchema: ZodObject<ZodRawShape>,
  ) { }

  protected validateCreateInput = (input: any) => this.zodCreateSchema.parse(input); // refactor

  protected validateUpdateInput = (input: any) => this.zodUpdateSchema.parse(input); // refactor

  protected static validateId = (_id: string) => { // refactor
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new DomainError('Invalid id', 400);
    }
  };

  abstract create(obj: CreateInput): Promise<Output>;

  abstract read(): Promise<Array<Output>>;

  abstract update(obj: UpdateInput): Promise<Output | null>;

  abstract delete(obj: DeleteInput): Promise<Output | null>;
}

export default GenericController;
