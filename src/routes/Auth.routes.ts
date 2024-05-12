import express from 'express';
import { logIn } from '../controllers/auth';

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    UserLogIn:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: User email
 *        password:
 *          type: string
 *          description: User password
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: "juanc@example.com"
 *        password: "Pass123."
 */


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: LogIn user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/UserLogIn'
 *     responses:
 *       200:
 *         description: Returns the created token
 *       400:
 *         description: Something went wrong
 *       500:
 *         description: Server error
 */
router.post('/login', logIn);


export default router;
