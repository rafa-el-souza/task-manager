import { NextFunction, Request, Response } from 'express';

import { ZodError } from 'zod';

import { DomainError } from '../../app/helpers/errors';

export class ErrorHandler {
  static domainError = (
    err: DomainError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (err instanceof DomainError) {
      return res.status(err.code).json({ error: err.message });
    }
    return next(err);
  };

  static zodDomainError = (
    err: ZodError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const firstIssue = err.issues[0];
    if (err instanceof ZodError) {
      return res.status(400)
        .json({ error: firstIssue?.message });
    }
    return next(err);
  };

  static internalError = (
    _err: Error,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
  ) => res.status(500).json({ message: 'Something went wrong' });
}
