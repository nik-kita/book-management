import express from "express";
import { bookRouter } from "./routes/book.router";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.all("/books", bookRouter);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
