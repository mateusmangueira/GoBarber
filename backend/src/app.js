import express from 'express';
import path from 'path';
import * as Sentry from '@sentry/node';
import routes from './routes';
import sentryConfig from './config/sentry';
import './database';
import 'express-async-errors';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    //Esse middleware do Sentry tem q vir antes de qualquer outro middleware do backend
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    //Esse middleware tem q vir depois das rotas do servidor para capturar os erros
    this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server;
