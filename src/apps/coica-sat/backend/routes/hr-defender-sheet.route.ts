import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {HRDefenderSheetGetController} from '../controllers/HRDefendersSheets/HRDefenderSheetGetController';
import {HRDefenderSheetPutController} from '../controllers/HRDefendersSheets/HRDefenderSheetPutController';
import {HRDefenderSheetDeleteController} from '../controllers/HRDefendersSheets/HRDefenderSheetDeleteController';
import {HRDefenderSheetPostController} from '../controllers/HRDefendersSheets/HRDefenderSheetPostController';
//import {HrDefenderSheetSchema} from '../schemas/hrDefenderSheetSchema';
import {verifyTokenByRoles} from '../services/AuthorizeService';
import {Roles} from '../../../../Contexts/CoicaSat/Shared/domain/Roles/Roles';
//import {validateBody} from '../schemas/JoiModule';

/**
 * @swagger
 * components:
 *   schemas:
 *     HRDefenderSheet:
 *       type: object
 *       required:
 *         - id
 *         - country
 *         - threatType
 *         - location
 *         - originTown
 *         - threatOtherType
 *         - rightsViolatedType
 *         - rightsViolatedOtherType
 *         - responseType
 *         - relationShipCOVIDType
 *         - relationShipCOVIDOtherType
 *         - threatAuthor
 *         - factsReported
 *         - informationSource
 *         - informationSourceOther
 *         - indicateMeans
 *         - thereWasLegalAction
 *         - thereWasAndAnswered
 *         - defenderName
 *         - UTMCoordinates
 *         - contactDetails
 *         - communityBase
 *         - completedBy
 *         - personName
 *         - requestCountry
 *         - requestType
 *         - requestAuthor
 *         - requestNumber
 *         - toWhomWasRequested
 *         - requestDescription
 *         - requestShortDescription
 *         - reportingCommunityBase
 *         - organizationName
 *         - organizationPersonName
 *         - mobileLatitude
 *         - mobileLongitude
 *         - mobileAddress
 *         - gpsId
 *         - xLongitude
 *         - yLatitude
 *         - zRise
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the hr defender sheet
 *         country:
 *           type: string
 *           description: The country of the hr defender sheet
 *           example: "USA"
 *         threatType:
 *           type: string
 *           description: The threat type of the hr defender sheet
 *           example: "COVID-19"
 *           enum:
 *             - "COVID-19"
 *             - "COVID-19"
 *         location:
 *           type: string
 *           description: The location of the hr defender sheet
 *           example: "USA"
 *         originTown:
 *           type: string
 *           description: The origin town of the hr defender sheet
 *           example: "USA"
 *         threatOtherType:
 *           type: string
 *           description: The threat other type of the hr defender sheet
 *           example: "COVID-19"
 *         rightsViolatedType:
 *           type: string
 *           description: The rights violated type of the hr defender sheet
 *           example: "COVID-19"
 *         rightsViolatedOtherType:
 *           type: string
 *           description: The rights violated other type of the hr defender sheet
 *           example: "COVID-19"
 *         responseType:
 *           type: string
 *           description: The response type of the hr defender sheet
 *           example: "COVID-19"
 *         relationShipCOVIDType:
 *           type: string
 *           description: The relation ship COVID type of the hr defender sheet
 *           example: "COVID-19"
 *         relationShipCOVIDOtherType:
 *           type: string
 *           description: The relation ship COVID other type of the hr defender sheet
 *           example: "COVID-19"
 *         threatAuthor:
 *           type: string
 *           description: The threat author of the hr defender sheet
 *           example: "COVID-19"
 *         factsReported:
 *           type: string
 *           description: The facts reported of the hr defender sheet
 *           example: "COVID-19"
 *         informationSource:
 *           type: string
 *           description: The information source of the hr defender sheet
 *           example: "COVID-19"
 *         informationSourceOther:
 *           type: string
 *           description: The information source other of the hr defender sheet
 *           example: "COVID-19"
 *         indicateMeans:
 *           type: string
 *           description: The indicate means of the hr defender sheet
 *           example: "COVID-19"
 *         thereWasLegalAction:
 *           type: string
 *           description: The there was legal action of the hr defender sheet
 *           example: "COVID-19"
 *         thereWasAndAnswered:
 *           type: string
 *           description: The there was and answered of the hr defender sheet
 *           example: "COVID-19"
 *         defenderName:
 *           type: string
 *           description: The defender name of the hr defender sheet
 *           example: "COVID-19"
 *         UTMCoordinates:
 *           type: string
 *           description: The utm coordinates of the hr defender sheet
 *           example: "COVID-19"
 *         contactDetails:
 *           type: string
 *           description: The contact details of the hr defender sheet
 *           example: "COVID-19"
 *         communityBase:
 *           type: string
 *           description: The community base of the hr defender sheet
 *           example: "COVID-19"
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
  router.get('/hr-defenders-sheets',   verifyTokenByRoles([Roles.ADMIN, Roles.FOCAL_POINT, Roles.MONITOR]), (req: Request, res: Response ) => hrDefenderSheetGetController.run(req, res));

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
  router.post('/hr-defender-sheet', verifyTokenByRoles([Roles.ADMIN, Roles.FOCAL_POINT, Roles.MONITOR]),  ( req: Request, res: Response ) => appointmentPostController.run(req, res));


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
  router.put('/hr-defender-sheet/:id', verifyTokenByRoles([Roles.ADMIN, Roles.FOCAL_POINT, Roles.MONITOR]),   (req: Request, res: Response) => hrDefenderSheetPutController.run(req, res));

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
  router.delete('/hr-defender-sheet/:id', verifyTokenByRoles([Roles.ADMIN, Roles.FOCAL_POINT, Roles.MONITOR]), (req: Request, res: Response) => hrDefenderSheetDeleteController.run(req, res));
};
