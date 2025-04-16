import type { Request, Response } from "express";
import { BookService } from "../services/book.service";

export const BookController = {
  createBook,
};

async function createBook(req: Request, res: Response) {
  const book = await BookService.createBook(req.body);
  console.log(book);
  res.status(201).json(book);
}
