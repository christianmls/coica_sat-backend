import Joi from 'joi';

export const ApplicationForMonitoringSchema = Joi.object().keys({
  id: Joi.string().required(),
  status: Joi.string().valid('SOLICIDATO', 'APROBADO', 'RECHAZADO').required(),
  date: Joi.date().required(),
  details: Joi.string().required(),
  userId: Joi.string().required(),
});
