import Joi from 'joi';

export const PostSchema = Joi.object().keys({
  id: Joi.string().optional(),
  description: Joi.string().required(),
  images: Joi.array().items(Joi.string().required()).required()
});
