import express from 'express';
import { getAllProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    CreateEditProduct:
 *      type: object
 *      properties:
 *        handle:
 *          type: string
 *          description: Handle based on title
 *        title:
 *          type: string
 *          description: Product's title
 *        description:
 *          type: string
 *          description: Product's description
 *        sku:
 *          type: string
 *          description: Stock Keeping Unitsku of product
 *        grams:
 *          type: number
 *          description: Product weight in grams
 *        stock:
 *          type: number
 *          description: Product Stock
 *        price:
 *          type: number
 *          description: Product price
 *        comparePrice:
 *          type: number
 *          description: Product compare price
 *        barcode:
 *          type: string
 *          description: Product barcode
 *      required:
 *        - handle
 *        - title
 *        - description
 *        - sku
 *        - grams
 *        - stock
 *        - price
 *        - comparePrice
 *      example:
 *        handle: "producto-de-prueba-1"
 *        title: "PRODUCTO DE PRUEBA 1"
 *        description: "Descripción del producto número 1"
 *        sku: "1982642378"
 *        grams: 124
 *        stock: 332
 *        price: 1245
 *        comparePrice: 1365
 *        barcode: "12245235"
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all created products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Return all created products
 *       400:
 *         description: Something went wrong
 *       500:
 *         description: Server error
 */
router.get('/', getAllProducts);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/CreateEditProduct'
 *     responses:
 *       200:
 *         description: Return the created product
 *       400:
 *         description: Something went wrong
 *       500:
 *         description: Server error
 */
router.post('/', createProduct);

/**
 * @swagger
 * /api/products/{idProduct}:
 *   put:
 *     summary: Update product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: idProduct
 *         required: true
 *         schema:
 *           type: number
 *           example: 250
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/CreateEditProduct'
 *     responses:
 *       200:
 *         description: Returns success message.
 *       400:
 *         description: Something went wrong
 *       500:
 *         description: Server error
 */
router.put('/:idProduct', updateProduct);

/**
 * @swagger
 * /api/products/{idProduct}:
 *   delete:
 *     summary: Delete product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: idProduct
 *         required: true
 *         schema:
 *           type: number
 *           example: 250
 *     responses:
 *       200:
 *         description: Returns success message.
 *       400:
 *         description: Something went wrong
 *       500:
 *         description: Server error
 */
router.delete('/:idProduct', deleteProduct)

export default router;
