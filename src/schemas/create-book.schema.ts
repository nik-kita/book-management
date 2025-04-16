import Joi from "joi";

export const CreateBookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().required(),
  status: Joi.string().valid("available", "reading", "finished").required(),
});
