import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import Youch from 'youch';
import * as Sentry from '@sentry/node';
import 'express-async-errors';
import routes from './routes';
import sentryConfig from './config/sentry';

import './database';

class App {
  constructor() {
    this.server = express();

    if (process.env.NODE_ENV !== 'development') {
      this.initSentry();
    }

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  initSentry() {
    Sentry.init(sentryConfig);
    this.server.use(Sentry.Handlers.requestHandler());
  }

  middlewares() {
    // Esse middleware do Sentry tem q vir antes de qualquer outro middleware do backend
    this.server.use(Sentry.Handlers.requestHandler());
    // Cors permite que aplicacoes com o endereco passado como parametro acesse a API
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    // Esse middleware tem q vir depois das rotas do servidor para capturar os erros
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
