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
});
