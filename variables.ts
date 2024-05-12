import "dotenv/config"
import {Secret} from "jsonwebtoken";

export const dbName = process.env.DATABASE_NAME
   ? process.env.DATABASE_NAME
   : 'db-juanc-haciendola-test';

export const dbUsername = process.env.DB_USERNAME
   ? process.env.DB_USERNAME
   : '';

export const dbPassword = process.env.DB_PASSWORD
   ? process.env.DB_PASSWORD
   : '';

export const dbHost = process.env.DB_HOST
   ? process.env.DB_HOST
   : '';

export const dbPort = process.env.DB_PORT
   ? process.env.DB_PORT
   : '';

export const secretJwt: Secret = process.env.SECRET_JWT
   ? process.env.SECRET_JWT
   : '';

