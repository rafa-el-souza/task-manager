export interface ServiceDTO<Output, CreateInput, UpdateInput, DeleteInput> {
  create(obj: CreateInput): Promise<Output>;
  read(): Promise<Array<Output>>;
  update(obj: UpdateInput): Promise<Output | null>;
  delete(obj: DeleteInput): Promise<Output | null>;
}
