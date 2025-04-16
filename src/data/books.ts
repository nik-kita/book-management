import { Book } from "../models/book.model";
import { TestUtil } from "../utils/test.util";

export const books = [
  {
    id: TestUtil.uuid(),
    title: "Sample Book 3",
    author: "Author 3",
    year: 2023,
    status: "finished",
  },
] as Book[];
