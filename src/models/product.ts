import { DataTypes } from "sequelize";
import { db } from "../database/connection";

const Product = db.define('product', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
   },
   handle: {
      type: DataTypes.STRING,
      allowNull: false
   },
   title: {
      type: DataTypes.STRING,
      allowNull: false
   },
   description: {
      type: DataTypes.STRING,
      allowNull: false
   },
   sku: {
      type: DataTypes.STRING,
      allowNull: false
   },
   grams: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   stock: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   price: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   comparePrice: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   barcode: {
      type: DataTypes.STRING
   },
});

export default Product;
