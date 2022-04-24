import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import joiValidator from 'express-joi-validation';
import {PostPostController} from '../controllers/Posts/PostPostController';
import {PostSchema} from '../schemas/PostSchema';
import {PostGetController} from '../controllers/Posts/PostGetController';
import {PostPutController} from '../controllers/Posts/PostPutController';
import {PostDeleteController} from '../controllers/Posts/PostDeleteController';
import {verifyTokenByRoles} from '../services/AuthorizeService';

const validator = joiValidator.createValidator({});

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - description
 *         - images
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the post
 *         description:
 *           type: string
 *           description: The post description
 *         images:
 *           type: array
 *           items: string
 *       example:
 *         id: d5fE_asz
 *         description: The New Turing Omnibus
 *         images: ['https://i.imgur.com/q1YQx.jpg', 'https://i.imgur.com/q1YQx.jpg']
 */

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: The posts managing API
 */

export const register = (router: Router) => {
  /**
   * @swagger
   * /post:
   *   post:
   *     summary: Create a new post
   *     tags: [Posts]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Post'
   *     responses:
   *       200:
   *         description: The post was successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Post'
   *       500:
   *         description: Some server error
   */
  const postPostController: PostPostController = container.get('Apps.CoicaSat.controllers.PostPostController');
  // @ts-ignore
  router.post('/post',  verifyTokenByRoles(), validator.body(PostSchema),  (req: Request, res: Response) => postPostController.run(req, res));

  /**
   * @swagger
   * /posts:
   *   get:
   *     summary: Returns the list of all the posts
   *     tags: [Posts]
   *     responses:
   *       200:
   *         description: The list of the posts
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Post'
   */
  const postGetController: PostGetController = container.get('Apps.CoicaSat.controllers.PostGetController');
  // @ts-ignore
  router.get('/posts',   verifyTokenByRoles(), (req: Request, res: Response) => postGetController.run(req, res));

  /**
   * @swagger
   * /post/{id}:
   *  put:
   *    summary: Update the Post by the id
   *    tags: [Posts]
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: The post id
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schemas/Post'
   *    responses:
   *      200:
   *        description: The post was updated
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Post'
   *      404:
   *        description: The post was not found
   *      500:
   *        description: Some error happened
   */
  const postPutController: PostPutController = container.get('Apps.CoicaSat.controllers.PostPutController');
  // @ts-ignore
  router.put('/post/:id', verifyTokenByRoles(), validator.body(PostSchema),  ( req: Request, res: Response ) => postPutController.run(req, res));

  /**
   * @swagger
   * /post/{id}:
   *   delete:
   *     summary: Remove the post by id
   *     tags: [Post]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The post id
   *
   *     responses:
   *       200:
   *         description: The post was deleted
   *       404:
   *         description: The post was not found
   */
  const postDeleteController: PostDeleteController = container.get('Apps.CoicaSat.controllers.PostDeleteController');
  // @ts-ignore
  router.delete('/post/:id',  verifyTokenByRoles(), (req: Request, res: Response) => postDeleteController.run(req, res));
};
