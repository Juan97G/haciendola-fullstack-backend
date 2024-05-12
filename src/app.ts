import express from 'express';
import cors from "cors";
import allRoutes from "./routes";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import "dotenv/config";
import { dbConnection } from "./database/connection";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

/* Swagger */
app.use(
   '/api/docs',
   swaggerUI.serve,
   swaggerUI.setup(swaggerJsDoc({
      definition: {
         openapi: '3.0.0',
         info: {
            title: "Documentation Backend - Haciendola.com",
            version: '1.0.0'
         }
      },
      apis: [`${path.join(__dirname, './routes/*.[tj]s')}`]
   }))
);

dbConnection();

/* ROUTES */
allRoutes(app);

app.listen(process.env.PORT, () =>
   console.log(`Listening on port ${process.env.PORT || 4000}`)
);
