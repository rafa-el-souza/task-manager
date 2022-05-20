import { DomainError } from '../helpers/errors';

import { ServiceDTO, ModelDTO } from '../helpers/types';

export abstract class GenericService<
  Output,
  CreateInput,
  UpdateInput,
  DeleteInput
  > implements ServiceDTO <
    Output,
    CreateInput,
    UpdateInput,
    DeleteInput
  > {
  constructor(
    protected model: ModelDTO<Output, CreateInput, UpdateInput, DeleteInput>,
  ) { }

  protected static notFound = (output: any) => {
    if (!output) {
      throw new DomainError('Not found', 404);
    }
    return output;
  };

  abstract create(obj: CreateInput): Promise<Output>;

  abstract read(): Promise<Array<Output>>;

  abstract update(obj: UpdateInput): Promise<Output | null>;

  abstract delete(obj: DeleteInput): Promise<Output | null>;
}

export default GenericService;
