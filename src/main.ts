import express from "express";
import { bookRouter } from "./routes/book.router";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

app.use("/books", bookRouter);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
