import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {UserPostController} from '../controllers/Users/UserPostController';
import {UserGetController} from '../controllers/Users/UserGetController';
import joiValidator from 'express-joi-validation';
import {UserSchema} from '../schemas/UserSchema';
import {UserDeleteController} from '../controllers/Users/UserDeleteController';
import {UserGetOneController} from '../controllers/Users/UserGetOneController';
import {verifyTokenByRoles} from '../services/AuthorizeService';
import {Roles} from '../../../../Contexts/CoicaSat/Shared/domain/Roles/Roles';

const validator = joiValidator.createValidator({});

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - names
 *         - lastNames
 *         - phone
 *         - birthDate
 *         - country
 *         - photo
 *         - community
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the post
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         names:
 *           type: string
 *           description: The names of the user
 *           example: "Juan"
 *         lastNames:
 *           type: string
 *           description: The last names of the user
 *           example: "Perez"
 *         phone:
 *           type: string
 *           description: The phone of the user
 *           example: "3123123123"
 *         birthDate:
 *           type: Date
 *           description: The birth date of the user
 *           example: "2020-01-01"
 *         country:
 *           type: string
 *           description: The country of the user
 *           example: "Colombia"
 *         photo:
 *           type: string
 *           description: The photo of the user
 *         community:
 *           type: string
 *           description: The community of the user
 *           example: "Colombia"
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

export const register = (router: Router) => {

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
   *         description: The user was successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       500:
   *         description: Some server error
   */
  const userPostController: UserPostController = container.get('Apps.CoicaSat.controllers.UserPostController');
  // @ts-ignore
  router.post('/user',  verifyTokenByRoles(Roles.ADMIN, Roles.FOCAL_POINT, Roles.MONITOR),  validator.body(UserSchema),  (req: Request, res: Response) => userPostController.run(req, res));

  /**
   * @swagger
   * /users:
   *   get:
   *     summary: Returns the list of all the users
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: The list of the users
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/User'
   */
  const userGetController: UserGetController = container.get('Apps.CoicaSat.controllers.UserGetController');
  // @ts-ignore
  router.get('/users',   verifyTokenByRoles(Roles.ADMIN, Roles.FOCAL_POINT, Roles.MONITOR),  (req: Request, res: Response) => userGetController.run(req, res));

  /**
   * @swagger
   * /user/{id}:
   *   get:
   *     summary: Get the user by id
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The user id
   *     responses:
   *       200:
   *         description: The user description by id
   *         contents:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       404:
   *         description: The user was not found
   */
  const userGetOneController: UserGetOneController = container.get('Apps.CoicaSat.controllers.UserGetOneController');
  // @ts-ignore
  router.get('/user/:id',  verifyTokenByRoles(),  ( req: Request, res: Response ) => userGetOneController.run(req, res));

  /**
   * @swagger
   * /user/{id}:
   *   delete:
   *     summary: Remove the user by id
   *     tags: [User]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The user id
   *
   *     responses:
   *       200:
   *         description: The user was deleted
   *       404:
   *         description: The user was not found
   */
  const userDeleteController: UserDeleteController = container.get('Apps.CoicaSat.controllers.UserDeleteController');
  // @ts-ignore
  router.delete('/user/:id',   verifyTokenByRoles(Roles.ADMIN, Roles.FOCAL_POINT, Roles.MONITOR), (req: Request, res: Response) => userDeleteController.run(req, res));
};
