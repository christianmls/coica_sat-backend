import { json, urlencoded } from 'body-parser';
import fileUpload from 'express-fileupload';
import compress from 'compression';
import errorHandler from 'errorhandler';
import express, { Request, Response } from 'express';
import Router from 'express-promise-router';
import helmet from 'helmet';
import * as http from 'http';
import httpStatus from 'http-status';
import { registerRoutes } from './routes';
import dotenv from 'dotenv';
import Cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import  swaggerJsDoc from 'swagger-jsdoc';
import {getSwaggerJsDocsOptions} from './swaggerJsDocsOptions';
import path from 'path';

export class Server {
  private express: express.Express;
  private readonly port: string;
  private httpServer?: http.Server;

  constructor(port: string) {
    dotenv.config();
    this.port = port;
    this.express = express();
    this.express.use(json());
    this.express.use(urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));
    this.express.use(compress());
    const router = Router();
    router.use(errorHandler());
    this.express.use(Cors());
    this.express.use(fileUpload());
    this.express.use(router);

    const swaggerJsDocsOptions = getSwaggerJsDocsOptions(this.port);
    const swaggerSpec = swaggerJsDoc(swaggerJsDocsOptions);
    router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    this.express.use('/files',  express.static(path.join(__dirname, 'public', 'uploads')));
    registerRoutes(router);

    router.use((err: Error, req: Request, res: Response, next: Function) => {
      console.log(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(
          `  Mock Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
        );
        console.log('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  getHTTPServer() {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}
