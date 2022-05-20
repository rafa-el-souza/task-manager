export class DomainError extends Error {
  public code;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}
