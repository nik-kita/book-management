import type { Request, Response } from "express";
import { BookService } from "../services/book.service";

export const BookController = {
  createBook,
};

async function createBook(req: Request, res: Response) {
  const id = await BookService.createBook(req.body);
  res.status(201).json({ id });
}
