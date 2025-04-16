import express from "express";
import { BookController } from "../controllers/book.controller";
import { validationMiddleware } from "../middlewares/validation.mdw";
import { BooksFilterSchema } from "../schemas/books-filter.schema";
import { CreateBookSchema } from "../schemas/create-book.schema";
import { PaginationSchema } from "../schemas/pagination.schema";
import { UpdateBookSchema } from "../schemas/update-book.schema";

export const bookRouter = express
  .Router();

bookRouter
  .post(
    "/",
    validationMiddleware(CreateBookSchema, "body"),
    BookController.createBook,
  )
  .put(
    "/:id",
    validationMiddleware(UpdateBookSchema, "body"),
    BookController.updateBook,
  )
  .delete(
    "/:id",
    BookController.deleteBook,
  )
  .get(
    "/",
    validationMiddleware(PaginationSchema, "query"),
    validationMiddleware(BooksFilterSchema, "query"),
    BookController.listBooks,
  );
