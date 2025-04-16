import { books } from "../data/books";
import { Book, BookStatus } from "../models/book.model";
import { BookService } from "./book.service";
import { faker } from "@faker-js/faker";

describe("BookService", () => {
  it("BookService should be defined", () => {
    expect(BookService).toBeDefined();
  });

  describe("create book should work", () => {
    let createdBooksCount = 0;

    it.each(
      Array.from("generate some books").map(() => ({
        author: faker.book.author(),
        status: [
          "available",
          "reading",
          "finished",
        ][Math.floor(Math.random() * 3)] as BookStatus,
        title: faker.book.title(),
        year: faker.date.past().getFullYear(),
      } satisfies Omit<Book, "id">)),
    )(
      "createBook should store the book $author $title",
      async (data) => {
        createdBooksCount++;
        const id = await BookService.createBook(data);
        expect(id).toBeDefined();
      },
    );

    it("All books should be created", () => {
      expect(createdBooksCount).toBe(books.length);
    });
  });

  describe("list books should work", () => {
    it("listBooks should return all books", async () => {
      const books = await BookService.listBooks();
      expect(books.length).toBe(books.length);
    });

    it("listBooks should return paginated books", async () => {
      const books = await BookService.listBooks({ page: 1, limit: 2 });
      expect(books.length).toBe(2);
    });
  });
});
