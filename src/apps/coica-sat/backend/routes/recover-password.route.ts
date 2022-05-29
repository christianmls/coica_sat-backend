import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {validateBody} from '../schemas/JoiModule';
import {RecoverPasswordPostController} from '../controllers/RecoverPassword/RecoverPasswordPostController';
import {RecoverPasswordSchema} from '../schemas/RecoverPasswordSchema';

/**
 * @swagger
 * components:
 *   schemas:
 *     RecoverPasswordRequest:
 *       type: object
 *       required:
 *       - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the recover password document
 *        email:
 *        type: string
 *        description: The email of the user
 *       example:
 *         id: d5fE_asz
 *         email: example@example.com
 */

/**
 * @swagger
 * tags:
 *   name: RecoverPassword
 *   description: The recover password API
 */

export const register = (router: Router) => {
  /**
   * @swagger
   * /recover-password:
   *   post:
   *     summary: Create a new recover password document
   *     tags: [RecoverPassword]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/RecoverPasswordRequest'
   *     responses:
   *       200:
   *         description: The recover password document was successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/RecoverPasswordRequest'
   *       500:
   *         description: Some server error
   */
  const recoverPasswordPostController: RecoverPasswordPostController = container.get('Apps.CoicaSat.controllers.RecoverPasswordPostController');
  // @ts-ignore
  router.post('/recover-password', validateBody(RecoverPasswordSchema),  (req: Request, res: Response) => recoverPasswordPostController.run(req, res));

};
