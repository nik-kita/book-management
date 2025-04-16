export type BookStatus = "available" | "reading" | "finished";

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  status: BookStatus;
}
