import express from "express";
import { validationMiddleware } from "../middlewares/validation.mdw";
import { CreateBookSchema } from "../schemas/create-book.schema";
import { BookController } from "../controllers/book.controller";

export const bookRouter = express
  .Router();

bookRouter.post(
  "/",
  validationMiddleware(CreateBookSchema, "body"),
  BookController.createBook,
);
