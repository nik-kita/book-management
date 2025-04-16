import { Book } from "../models/book.model";

export const BookService = {};

async function createBook(data: Omit<Book, "id">): Promise<string> {
  throw new Error("is not implemented yet");
}

async function updateBook(
  id: string,
  data: Partial<Omit<Book, "id">>,
): Promise<Book> {
  throw new Error("is not implemented yet");
}

async function deleteBook(id: string): Promise<boolean> {
  throw new Error("is not implemented yet");
}

async function listBooks(): Promise<Book[]> {
  throw new Error("is not implemented yet");
}
