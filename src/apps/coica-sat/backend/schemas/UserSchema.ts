import Joi from 'joi';

export const UserSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  names: Joi.string().required(),
  lastNames: Joi.string().required(),
  phone: Joi.string().required(),
  birthDate: Joi.date().required(),
  country: Joi.string().required(),
  community: Joi.string().required(),
  photo: Joi.string().required()
});
