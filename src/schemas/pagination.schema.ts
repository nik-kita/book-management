import Joi from "joi";

export const PaginationSchema = Joi.object({
  page: Joi.number().default(1).min(1),
  limit: Joi.number().default(10).min(1).max(100),
});
