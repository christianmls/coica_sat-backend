import Joi from 'joi';

export const RecoverPasswordSchema = Joi.object().keys({
  id: Joi.any().optional(),
  email: Joi.string().email().required()
});
