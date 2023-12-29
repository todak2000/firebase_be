import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from "express";
import config from "./src/config";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: config.SwaggerTitle,
      version: config.SwaggerVersion,
      description: config.SwaggerDescription,
    },
    servers: [
      {
        url:
          process.env.NODE_ENV !== "production"
            ? `${config.hostUrl}/api/v1`
            : `https://firebase-be.onrender.com/api/v1`,
      },
    ],
  },
  //
  apis: ["./src/routes/index.ts"],
};

const specs = swaggerJsdoc(options);

export default (app: express.Application) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true }),
  );
};
