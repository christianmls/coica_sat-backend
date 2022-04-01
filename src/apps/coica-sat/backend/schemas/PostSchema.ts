import Joi from 'joi';

export const PostSchema = Joi.object().keys({
  description: Joi.string().required(),
  images: Joi.array().items(Joi.string()).required()
});
