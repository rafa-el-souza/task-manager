import { NextFunction, Request, Response } from 'express';

export class CorsMiddleware {
  static config = (_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('access-control-allow-headers', '*');
    res.setHeader('access-control-allow-methods', '*');
    res.setHeader('access-control-allow-origin', '*');
    next();
  };
}
