import type { Request, Response } from "express";
import { BookService } from "../services/book.service";

export const BookController = {
  createBook,
  updateBook,
  deleteBook,
  listBooks,
};

async function createBook(req: Request, res: Response) {
  const id = await BookService.createBook(req.body);
  res.status(201).json({ id });
}

async function updateBook(req: Request, res: Response) {
  const book = await BookService.updateBook(req.params.id, req.body);
  res.status(200).json(book);
}

async function deleteBook(req: Request, res: Response) {
  const result = await BookService.deleteBook(req.params.id);
  res.status(200).json(result);
}

async function listBooks(req: Request, res: Response) {
  const books = await BookService.listBooks(req.query, req.query);
  res.status(200).json(books);
}
