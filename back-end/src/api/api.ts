import express, { Router } from 'express';

import { connection as connectToDatabase } from '../db/connection';

class Api {
  public api: express.Application;

  constructor() {
    this.api = express();
    this.api.use(express.json());
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase();
    this.api.listen(
      PORT,
      () => console.log(`TaskManager API is running here 👉 http://localhost:${PORT}`),
    );
  }

  public addRouter(router: Router) {
    this.api.use(router);
  }

  public getApi() {
    return this.api;
  }
}

export default Api;
