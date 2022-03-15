import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import joiValidator from 'express-joi-validation';
import {PostPostController} from '../controllers/Posts/PostPostController';
import {PostSchema} from '../schemas/PostSchema';
import {AuthorizeService} from '../services/AuthorizeService';

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
  const postPostController: PostPostController = container.get('Apps.CoicaSat.controllers.PostPostController');

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
  // @ts-ignore
  router.post('/post',  AuthorizeService.verify, validator.body(PostSchema),  (req: Request, res: Response) => postPostController.run(req, res));
};
