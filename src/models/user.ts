import { DataTypes } from "sequelize";
import { db } from "../database/connection";

const User = db.define('user', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   phone: {
      type: DataTypes.STRING
   },
   email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   }
});

export default User;
