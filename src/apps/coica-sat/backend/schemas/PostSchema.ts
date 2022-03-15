import Joi from 'joi';

export const PostSchema = Joi.object().keys({
  description: Joi.string().email().required(),
  images: Joi.array().items(Joi.string().required())
});
