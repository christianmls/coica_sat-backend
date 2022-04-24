import { Router, Request, Response } from 'express';
import container from '../dependency-injection';

import joiValidator from 'express-joi-validation';
import {HRDefenderSheetGetController} from '../controllers/HRDefendersSheets/HRDefenderSheetGetController';
import {HRDefenderSheetPutController} from '../controllers/HRDefendersSheets/HRDefenderSheetPutController';
import {HRDefenderSheetDeleteController} from '../controllers/HRDefendersSheets/HRDefenderSheetDeleteController';
import {HRDefenderSheetPostController} from '../controllers/HRDefendersSheets/HRDefenderSheetPostController';
import {HrDefenderSheetSchema} from '../schemas/hrDefenderSheetSchema';
import {verifyTokenByRoles} from '../services/AuthorizeService';


const validator = joiValidator.createValidator({});


/**
 * @swagger
 * components:
 *   schemas:
 *     HRDefenderSheet:
 *       type: object
 *       required:
 *         - id
 *         - country
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the appointment
 *         country:
 *           type: string
 *           description: The country of the appointment
 *           example: "USA"
 *       example:
 *         id: d5fE_asz
 *         country: "USA"
 */

/**
 * @swagger
 * tags:
 *   name: HrDefenderSheet
 *   description: The appointment managing API
 */

export const register = (router: Router) => {

  /**
   * @swagger
   * /hr-defenders-sheets:
   *   get:
   *     summary: Returns the list of all the hr-defenders-sheets
   *     tags: [HrDefenderSheet]
   *     responses:
   *       200:
   *         description: The list of the hr-defenders-sheets
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/HRDefenderSheet'
   */
  const hrDefenderSheetGetController: HRDefenderSheetGetController = container.get('Apps.CoicaSat.controllers.HRDefenderSheetGetController');
  // @ts-ignore
  router.get('/hr-defenders-sheets',   verifyTokenByRoles(), (req: Request, res: Response ) => hrDefenderSheetGetController.run(req, res));

  /**
   * @swagger
   * /hr-defender-sheet:
   *   post:
   *     summary: Create a new appointment
   *     tags: [HrDefenderSheet]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/HrDefenderSheet'
   *     responses:
   *       200:
   *         description: The hrDefenderSheet was successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/HrDefenderSheet'
   *       500:
   *         description: Some server error
   */
  const appointmentPostController: HRDefenderSheetPostController = container.get('Apps.CoicaSat.controllers.HRDefenderSheetPostController');
  // @ts-ignore
  router.post('/hr-defender-sheet', validator.body(HrDefenderSheetSchema),  ( req: Request, res: Response ) => appointmentPostController.run(req, res));


  /**
   * @swagger
   * /hr-defender-sheet/{id}:
   *  put:
   *    summary: Update the hrDefenderSheet by the id
   *    tags: [Appointments]
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: The appointment id
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schemas/HrDefenderSheet'
   *    responses:
   *      200:
   *        description: The hrDefenderSheet was updated
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/HrDefenderSheet'
   *      404:
   *        description: The holiday was not found
   *      500:
   *        description: Some error happened
   */
  const hrDefenderSheetPutController: HRDefenderSheetPutController = container.get('Apps.CoicaSat.controllers.HRDefenderSheetPutController');
  // @ts-ignore
  router.put('/hr-defender-sheet/:id', validator.body(HrDefenderSheetSchema),   (req: Request, res: Response) => hrDefenderSheetPutController.run(req, res));

  /**
   * @swagger
   * /hr-defender-sheet/{id}:
   *   delete:
   *     summary: Remove the appointment by id
   *     tags: [HrDefenderSheet]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The hrDefenderSheet id
   *
   *     responses:
   *       200:
   *         description: The hrDefenderSheet was deleted
   *       404:
   *         description: The hrDefenderSheet was not found
   */
  const hrDefenderSheetDeleteController: HRDefenderSheetDeleteController = container.get('Apps.CoicaSat.controllers.HRDefenderSheetDeleteController');
  // @ts-ignore
  router.delete('/hr-defender-sheet/:id', (req: Request, res: Response) => hrDefenderSheetDeleteController.run(req, res));
};
