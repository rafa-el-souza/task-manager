import Joi from 'joi';

export const nameSchema = Joi.string().min(3).required().messages({
  'string.base': 'Name should be of type \'string\'',
  'string.empty': 'Name cannot be empty',
  'string.min': 'Name must be at least {#limit} characters long',
  'any.required': 'Name is a required field',
});
