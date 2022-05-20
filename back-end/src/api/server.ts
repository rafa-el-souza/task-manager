import 'express-async-errors';

import 'dotenv/config';

import Api from './api';

import { taskFactory } from '../app/helpers/factories';

import { ErrorHandler, CorsMiddleware } from './middlewares';

const server = new Api();

server.api.use(CorsMiddleware.config);

server.addRouter(taskFactory().router);

server.api.use(ErrorHandler.domainError);

server.api.use(ErrorHandler.zodDomainError);

server.api.use(ErrorHandler.internalError);

export { server };
