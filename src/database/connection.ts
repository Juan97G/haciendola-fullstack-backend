import { Sequelize } from "sequelize";
import {dbHost, dbName, dbPassword, dbPort, dbUsername} from "../../variables";

export const db = new Sequelize(dbName, dbUsername, dbPassword, {
   host: dbHost,
   dialect: 'mysql',
   port: +dbPort,
   timezone: '-05:00'
})

export const dbConnection =  async () => {
   try {
      await db.authenticate();
      console.log("Database connected successfully.");
   } catch (err) {
      throw new Error("Error to connect database: " + err);
   }
}
