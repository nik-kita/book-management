import Joi from "joi";

export function validationMiddleware(
  schema: Joi.Schema,
  target: "body" | "params" | "query",
) {
  return (req: any, res: any, next: any) => {
    const { error } = schema.validate(req[target]);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    next();
  };
}
