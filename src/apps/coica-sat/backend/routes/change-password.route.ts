import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {validateBody} from '../schemas/JoiModule';
import {ChangePasswordPostController} from '../controllers/RecoverPassword/ChangePasswordPostController';
import {ChangePasswordSchema} from '../schemas/ChangePasswordSchema';

/**
 * @swagger
 * components:
 *   schemas:
 *     ChangePassword:
 *       type: object
 *       required:
 *       - token
 *       - newPassword
 *       properties:
 *        token:
 *          type: string
 *          description: The token of the recover password document
 *          example: d5fE_asz
 *        newPassword:
 *          type: string
 *          description: The new password of the user
 *       example:
 *       token: d5fE_asz
 *       newPassword: examplePassword
 */

/**
 * @swagger
 * tags:
 *   name: ChangePassword
 *   description: The change password API
 */

export const register = (router: Router) => {
  /**
   * @swagger
   * /change-password:
   *   post:
   *     summary: Change the password of the user
   *     tags: [ChangePassword]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/ChangePassword'
   *     responses:
   *       200:
   *         description: The password was successfully changed
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ChangePassword'
   *       500:
   *         description: Some server error
   */
  const changePasswordPostController: ChangePasswordPostController = container.get('Apps.CoicaSat.controllers.ChangePasswordPostController');
  // @ts-ignore
  router.post('/change-password', validateBody(ChangePasswordSchema),  (req: Request, res: Response) => changePasswordPostController.run(req, res));

};
