import joi from "joi";

export const BooksFilterSchema = joi.object({
  title: joi.string().optional(),
  status: joi.string().valid("available", "reading", "finished").optional(),
});
