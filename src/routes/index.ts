import { Application } from "express";
import authRoutes from "./Auth.routes";
import userRoutes from "./User.routes";
import productRoutes from "./Product.routes";

const routes = (app: Application) => {
   app.use("/api/auth", authRoutes);
   app.use("/api/users", userRoutes);
   app.use("/api/products", productRoutes);
}

export default routes;
