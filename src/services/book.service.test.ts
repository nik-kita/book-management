import { books } from "../data/books";
import { Book, BookStatus } from "../models/book.model";
import { BookService } from "./book.service";
import { faker } from "@faker-js/faker";

describe("BookService", () => {
  it("BookService should be defined", () => {
    expect(BookService).toBeDefined();
  });

  let createdBooksCount = 0;

  describe("create book should work", () => {
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
      const books = await BookService.listBooks({}, { page: 1, limit: 2 });
      expect(books.length).toBe(2);
    });

    it('listBooks should return books with status "available"', async () => {
      const books = await BookService.listBooks({ status: "available" });
      expect(books.every((book) => book.status === "available")).toBe(true);
    });
  });

  describe("delete book should work", () => {
    it.each([1, 2])("deleteBook should delete the book", async () => {
      const book = books[0];
      const result = await BookService.deleteBook(book.id);
      expect(result).toBe(true);
    });

    it("deleteBook should not delete the book", async () => {
      const result = await BookService.deleteBook("invalid-id");
      expect(result).toBe(false);
    });
  });

  describe("update book should work", () => {
    it("updateBook should update the book", async () => {
      const book = books[0];
      const updatedBook = await BookService.updateBook(book.id, {
        title: "Updated Title",
      });
      expect(updatedBook.title).toBe("Updated Title");
    });

    it("updateBook should throw an error", async () => {
      await expect(
        BookService.updateBook("invalid-id", { title: "Updated Title" }),
      ).rejects.toThrow("Book not found");
    });
  });
});
