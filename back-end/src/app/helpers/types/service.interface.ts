import {
  ICreateInput, IDeleteInput, IUpdateInput, IUpdateStatusInput,
} from './task.interface';

export interface ServiceDTO<T> {
  create(obj: ICreateInput): Promise<T>;
  read(): Promise<Array<T>>;
  updateStatus(obj: IUpdateStatusInput): Promise<T | null>;
  update(obj: IUpdateInput): Promise<T | null>;
  delete(obj: IDeleteInput): Promise<T | null>;
}
