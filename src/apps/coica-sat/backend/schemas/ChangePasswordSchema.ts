import Joi from 'joi';

export const ChangePasswordSchema = Joi.object().keys({
  token: Joi.string().required(),
  newPassword: Joi.string().required()
});
