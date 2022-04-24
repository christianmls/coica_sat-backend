import { Router, Response } from 'express';
import container from '../dependency-injection';
import {TokenVerificationGetController} from '../controllers/TokensVerification/TokenVerificationGetController';
import {UserLoggedRequest} from '../shared/types';
import {verifyTokenByRoles} from '../services/AuthorizeService';

/**
 * @swagger
 * components:
 *   schemas:
 *     TokenVerification:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated UUID of the user logged in token
 *       example:
 *         id: dffa9f5e-f8f8-4f5b-b8f8-f8f8f8f8f8f8
 */

/**
 * @swagger
 * tags:
 *   name: TokenVerification
 *   description: TokensVerification operations for Coica-sat
 */
export const register = (router: Router) => {
  const tokenVerificationGetController: TokenVerificationGetController = container.get('Apps.CoicaSat.controllers.TokenVerificationGetController');

  /**
   * @swagger
   * /token-me:
   *   get:
   *     summary: Returns user logged in token
   *     tags: [TokenVerification]
   *     parameters:
   *       -
   *         name: Authorization
   *         in: header
   *         description: Authorization header
   *         required: true
   *     responses:
   *       200:
   *         description: The UUID of the user logged in
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/TokenVerification'
   *               type: object
   */
  // @ts-ignore
  router.get('/token-me',  verifyTokenByRoles(), (req: UserLoggedRequest, res: Response) => tokenVerificationGetController.run(req, res));
};
