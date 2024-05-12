import {Request, Response} from "express";
import Product from "../../models/product";
import { CreateEditProduct } from "./product";


export const getAllProducts = async (_req: Request, res: Response) => {
   try {
      const products = await Product.findAll();

      return res.status(200).json(products);
   } catch (e) {
      return res.status(400).send((e as Error).message);
   }
}

export const createProduct = async (req: Request, res: Response) => {
   const productBody: CreateEditProduct = req.body;

   //productBody.handle = productBody.title.toLowerCase().replaceAll(" ", "-");

   try {
      const newProduct = await Product.create(productBody);

      return res.status(200).json(newProduct);

   } catch (e) {
      return res.status(400).send((e as Error).message);
   }
}

export const updateProduct = async (req: Request, res: Response) => {
   const productBody: CreateEditProduct = req.body;
   const { idProduct } = req.params;

   try {
      const findProduct = await Product.findByPk(idProduct);
      if (!findProduct) return res.status(404).send({ message: `No se ha encontrado un producto con el ID ${idProduct}` });

      await findProduct.update(productBody);

      return res.status(200).send({ message: 'Producto actualizado correctamente.' });
   } catch (e) {
      return res.status(400).send((e as Error).message);
   }
}

export const deleteProduct = async (req: Request, res: Response) => {
   const { idProduct } = req.params;

   try {
      const findProduct = await Product.findByPk(idProduct);
      if (!findProduct) return res.status(404).send({ message: `No se ha encontrado un producto con el ID ${idProduct}` });

      await findProduct.destroy();

      return res.status(200).send({ message: 'Producto eliminado correctamente.' });
   } catch (e) {
      return res.status(400).send((e as Error).message);
   }
}
