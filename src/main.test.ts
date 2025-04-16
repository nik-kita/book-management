import { request } from "undici";
import { books } from "./data/books";
import { Book } from "./models/book.model";

const URL = process.env.URL || "http://localhost:3000";

describe("e2e", () => {
  const books: Book[] = [];
  it("create book", async () => {
    const res = await request(`${URL}/books`, {
      method: "POST",
      body: JSON.stringify({
        title: "New Book",
        author: "Author Name",
        year: 2023,
        status: "available",
      }),
    });
    expect(res.statusCode).toBe(201);
    expect(await res.body.json()).toHaveProperty("id");
  });

  it("list books", async () => {
    const res = await request(`${URL}/books`);
    expect(res.statusCode).toBe(200);
    const data: any = await res.body.json();
    expect(data).toHaveProperty("items");
    expect(data?.items).toBeInstanceOf(Array);
    books.push(...data.items);
  });

  it("update book", async () => {
    const res = await request(`${URL}/books/${books[0].id}`, {
      method: "PUT",
      body: JSON.stringify({
        status: "available",
      }),
    });
    expect(res.statusCode).toBe(200);
  });

  it("delete book", async () => {
    const res = await request(`${URL}/books/${books[0].id}`, {
      method: "DELETE",
    });
    expect(res.statusCode).toBe(204);
  });
});
