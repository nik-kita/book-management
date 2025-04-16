import { books } from "../data/books";
import { Book } from "../models/book.model";
import { TestUtil } from "../utils/test.util";

export const BookService = {
  createBook,
  updateBook,
  deleteBook,
  listBooks,
};

async function createBook(data: Omit<Book, "id">): Promise<string> {
  await TestUtil.delay();
  const book: Book = {
    ...data,
    id: TestUtil.uuid(),
  };

  books.push(book);

  return book.id;
}

async function updateBook(
  id: string,
  data: Partial<Omit<Book, "id">>,
): Promise<Book> {
  throw new Error("is not implemented yet");
}

async function deleteBook(id: string): Promise<boolean> {
  await TestUtil.delay();
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return false;
  }

  books.splice(index, 1);

  return true;
}

async function listBooks(
  pagination?: { page?: number; limit?: number },
): Promise<Book[]> {
  await TestUtil.delay();
  const {
    page = 0,
    limit = 10,
  } = pagination ?? {};
  const skip = page * limit;

  return books.slice(
    skip,
    skip + limit,
  );
}
