import express, { Request, Response, NextFunction } from "express";
import userRouter from "./userRouter";
import homeRouter from "./homeRouter";

const router = express.Router();

router.use(userRouter);
router.use(homeRouter);

router.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ status: 404, message: "Route not found" });
});

export default router;

// ---------- USER ROUTER SCHEMA/OPERATION ------------
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - firstname
 *         - lastname
 *         - email
 *         - authType
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         firstname:
 *           type: string
 *           description: The first name of the user
 *         lastname:
 *           type: string
 *           description: The last name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         authType:
 *           type: string
 *           description: The authentication type of the user
 *         role:
 *           type: string
 *           description: The role of the user
 *       example:
 *         id: d5fE_asz
 *         firstname: John
 *         lastname: Doe
 *         email: john.doe@example.com
 *         authType: local
 *         role: admin
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: New user created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: The status code of the response
 *                 message:
 *                   type: string
 *                   description: The success message
 *       400:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: The status code of the error
 *                 message:
 *                   type: string
 *                   description: The error message
 *   get:
 *     summary: Get a user by ID
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Data retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: The status code of the error
 *                 message:
 *                   type: string
 *                   description: The error message
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: The status code of the response
 *                 message:
 *                   type: string
 *                   description: The success message
 *       400:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: The status code of the error
 *                 message:
 *                   type: string
 *                   description: The error message
 *   put:
 *     summary: Update a user by ID
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: The status code of the response
 *                 message:
 *                   type: string
 *                   description: The success message
 *       400:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: The status code of the error
 *                 message:
 *                   type: string
 *                   description: The error message
 */
