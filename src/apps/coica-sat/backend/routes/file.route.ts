import { Router, Request, Response } from 'express';
import {FilePostController} from '../controllers/Files/FilePostController';
import {verifyTokenByRoles} from '../services/AuthorizeService';

/**
 * @swagger
 * components:
 *   schemas:
 *     File:
 *       type: object
 *       properties:
 *         fileDocument:
 *           type: string
 *           format: binary
 *           description: File to upload
 *           required: true
 *       example:
 *         fileDocument: "file content"
 */

/**
 * @swagger
 * tags:
 *   name: Files
 *   description: The posts managing API
 */

export const register = (router: Router) => {

  /**
   * @swagger
   * /upload-file:
   *   post:
   *     summary: Upload a file
   *     tags: [Files]
   *     requestBody:
   *       content:
   *         formData:
   *           type: file
   *           name: fileDocument
   *           description: File to upload
   *           required: true
   *           in: formData
   *     responses:
   *       200:
   *         description: The file has been uploaded
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/File'
   *       500:
   *         description: Some server error
   */

  const filePostController: FilePostController = new FilePostController();
  // @ts-ignore
  router.post('/upload-file',  verifyTokenByRoles(),   (req: Request, res: Response) => filePostController.run(req, res));
};
