import express from 'express';
import { updatePassword } from "../controllers/user";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    UpdatePassword:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: Email user
 *        password:
 *          type: string
 *          description: New password
 *        oldPassword:
 *          type: string
 *          description: Old password
 *      required:
 *        - email
 *        - password
 *        - oldPassword
 *      example:
 *        email: "juanc@example.com"
 *        oldPassword: "p123456?"
 *        password: "?654321p"
 */

/**
 * @swagger
 * /api/users/password/update:
 *   patch:
 *     summary: Update password
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/UpdatePassword'
 *     responses:
 *       200:
 *         description: Returns success message.
 *       400:
 *         description: Something went wrong
 *       500:
 *         description: Server error
 */
router.patch('/password/update', updatePassword);

export default router;
