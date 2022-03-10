import { Server } from './server';

export class CoicaSatApp {
  server?: Server;

  async start() {
    const port = process.env.PORT || '3001';
    this.server = new Server(port);
    return this.server.listen();
    console.log(`Server listening on port ${port}`);
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }

}
