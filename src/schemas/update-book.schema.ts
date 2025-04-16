import Joi from "joi";

export const UpdateBookSchema = Joi.object({
  status: Joi.string()
    .valid("available", "reading", "finished"),
});
