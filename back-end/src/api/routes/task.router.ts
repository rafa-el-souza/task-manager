import { Request, Response, Router } from 'express';

import { GenericController } from '../../app/controllers';

export class TaskRouter<
  Output,
  CreateInput,
  UpdateInput,
  DeleteInput
  > {
  public router: Router;

  constructor(
    private controller: GenericController<
      Output,
      CreateInput,
      UpdateInput,
      DeleteInput
    >,
    private _route: string = controller.route,
  ) {
    this.router = Router();
    this.addRoutes();
  }

  private addRoutes = () => {
    this.router
      .post(
        this._route,
        async (req: Request, res: Response) => {
          const task = await this.controller.create(req.body);
          return res.status(201).json(task);
        },
      )
      .get(
        this._route,
        async (_req: Request, res: Response) => {
          const tasks = await this.controller.read();
          return res.status(200).json(tasks);
        },
      )
      .put(
        this._route,
        async (req: Request, res: Response) => {
          const task = await this.controller.update(req.body);
          return res.status(200).json(task);
        },
      )
      .delete(
        this._route,
        async (req: Request, res: Response) => {
          const task = await this.controller.delete(req.body);
          return res.status(200).json(task);
        },
      );
  };
}

export default TaskRouter;
