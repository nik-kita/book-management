import { request } from "undici";

const URL = process.env.URL || "http://localhost:3000";

describe("e2e", () => {
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
    expect(await res.body.json()).toBeInstanceOf(Array);
  });

  it("update book", async () => {
    const res = await request(`${URL}/books/1`, {
      method: "PUT",
      body: JSON.stringify({
        title: "Updated Book",
        author: "Updated Author",
        year: 2024,
        status: "available",
      }),
    });
    expect(res.statusCode).toBe(200);
    expect(await res.body.json()).toHaveProperty("id", 1);
  });

  it("delete book", async () => {
    const res = await request(`${URL}/books/1`, {
      method: "DELETE",
    });
    expect(res.statusCode).toBe(200);
    expect(await res.body.json()).toBe(true);
  });
});
