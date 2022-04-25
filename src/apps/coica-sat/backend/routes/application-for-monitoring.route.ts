import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import joiValidator from 'express-joi-validation';
import {verifyTokenByRoles} from '../services/AuthorizeService';
import {
  ApplicationForMonitoringPostController
} from '../controllers/ApplicationsForMonitoring/ApplicationForMonitoringPostController';
import {
  ApplicationForMonitoringGetController
} from '../controllers/ApplicationsForMonitoring/ApplicationForMonitoringGetController';
import {
  ApplicationForMonitoringPutController
} from '../controllers/ApplicationsForMonitoring/ApplicationForMonitoringPutController';
import {
  ApplicationForMonitoringDeleteController
} from '../controllers/ApplicationsForMonitoring/ApplicationForMonitoringDeleteController';
import {ApplicationForMonitoringSchema} from '../schemas/ApplicationForMonitoringSchema';

const validator = joiValidator.createValidator({});

/**
 * @swagger
 * components:
 *   schemas:
 *     ApplicationForMonitoring:
 *       type: object
 *       required:
 *         - id
 *         - status
 *         - details
 *         - date
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the application for monitoring
 *           example: 5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f8
 *         status:
 *           type: string
 *           description: The status of the application for monitoring
 *           example: pending
 *         details:
 *           type: string
 *           description: The details of the application for monitoring
 *           example: The application for monitoring is pending
 *         date:
 *           type: string
 *           description: The date of the application for monitoring
 *           example: 2020-05-01T00:00:00.000Z
 *         userId:
 *           type: string
 *           description: The user id of the application for monitoring
 *           example: 5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f8
 *       example:
 *         id: 5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f8
 *         status: pending
 *         details: The application for monitoring is pending
 *         date: 2020-05-01T00:00:00.000Z
 *         userId: 5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f8
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
   * /application-for-monitoring:
   *   post:
   *     summary: Create a new application for monitoring
   *     tags: [ApplicationsForMonitoring]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/ApplicationForMonitoring'
   *     responses:
   *       200:
   *         description: The post was successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ApplicationForMonitoring'
   *       500:
   *         description: Some server error
   */
  const applicationForMonitoringPostController: ApplicationForMonitoringPostController = container.get('Apps.CoicaSat.controllers.ApplicationForMonitoringPostController');
  // @ts-ignore
  router.post('/application-for-monitoring',  verifyTokenByRoles(),  (req: Request, res: Response) => applicationForMonitoringPostController.run(req, res));

  /**
   * @swagger
   * /applications-for-monitoring:
   *   get:
   *     summary: Returns the list of all the applications for monitoring
   *     tags: [ApplicationsForMonitoring]
   *     responses:
   *       200:
   *         description: The list of the applications for monitoring
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/ApplicationForMonitoring'
   */
  const applicationForMonitoringGetController: ApplicationForMonitoringGetController = container.get('Apps.CoicaSat.controllers.ApplicationForMonitoringGetController');
  // @ts-ignore
  router.get('/applications-for-monitoring',   verifyTokenByRoles(), (req: Request, res: Response) => applicationForMonitoringGetController.run(req, res));

  /**
   * @swagger
   * /application-for-monitoring/{id}:
   *  put:
   *    summary: Update the application for monitoring by the id
   *    tags: [ApplicationsForMonitoring]
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: The application for monitoring id
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schemas/ApplicationForMonitoring'
   *    responses:
   *      200:
   *        description: The post was updated
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/ApplicationForMonitoring'
   *      404:
   *        description: The application for monitoring was not found
   *      500:
   *        description: Some error happened
   */
  const applicationForMonitoringPutController: ApplicationForMonitoringPutController = container.get('Apps.CoicaSat.controllers.ApplicationForMonitoringPutController');
  // @ts-ignore
  router.put('/application-for-monitoring/:id', verifyTokenByRoles(), validator.body(ApplicationForMonitoringSchema),  ( req: Request, res: Response ) => applicationForMonitoringPutController.run(req, res));

  /**
   * @swagger
   * /application-for-monitoring/{id}:
   *   delete:
   *     summary: Remove the application for monitoring by id
   *     tags: [ApplicationsForMonitoring]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The application for monitoring id
   *
   *     responses:
   *       200:
   *         description: The application for monitoring was deleted
   *       404:
   *         description: The application for monitoring was not found
   */
  const applicationForMonitoringDeleteController: ApplicationForMonitoringDeleteController = container.get('Apps.CoicaSat.controllers.ApplicationForMonitoringDeleteController');
  // @ts-ignore
  router.delete('/application-for-monitoring/:id',  verifyTokenByRoles(), (req: Request, res: Response) => applicationForMonitoringDeleteController.run(req, res));
};
