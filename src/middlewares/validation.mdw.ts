import Joi from "joi";
import type { NextFunction, Request, Response } from "express";

export function validationMiddleware(
  schema: Joi.Schema,
  target: "body" | "params" | "query",
) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[target]);

    if (error) {
      res.status(400).json({ message: String(error.details[0].message) });

      return;
    }

    next();
  };
}
