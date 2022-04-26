import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {verifyTokenByRoles} from '../services/AuthorizeService';
import {
  HRDefenderSheetHistoryGetController
} from '../controllers/HRDefendersSheetsHistory/HRDefenderSheetHistoryGetController';


/**
 * @swagger
 * components:
 *   schemas:
 *     HRDefendersSheetsHistory:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the hr defender sheet history
 *       example:
 *         id: d5fE_asz
 *         country: "USA"
 */

/**
 * @swagger
 * tags:
 *   name: HrDefenderSheetHistory
 *   description: The HrDefenderSheetHistory managing API
 */

export const register = (router: Router) => {

  /**
   * @swagger
   * /hr-defenders-sheets-history:
   *   get:
   *     summary: Returns the list of all the hr-defenders-sheets-history
   *     tags: [HrDefenderSheet]
   *     responses:
   *       200:
   *         description: The list of the hr-defenders-sheets-history
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/HRDefenderSheetHistory'
   */
  const hrDefendersSheetsHistoryGetController: HRDefenderSheetHistoryGetController = container.get('Apps.CoicaSat.controllers.HRDefenderSheetHistoryGetController');
  // @ts-ignore
  router.get('/hr-defenders-sheets-history',   verifyTokenByRoles(), (req: Request, res: Response ) => hrDefendersSheetsHistoryGetController.run(req, res));
};
