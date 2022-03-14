const routesPaths = __dirname + '/**/*.route.*';

export const SwaggerJsDocsOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CoicaSat API',
      version: '1.0.0',
      description: 'CoicaSat API',
    },
    servers: [
      {
        url: ''
      }
    ]
  },
  apis: [routesPaths]
};
