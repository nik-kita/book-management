import express, { NextFunction, Request, Response } from "express";
import { bookRouter } from "./routes/book.router";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

app.use("/books", bookRouter);
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(PORT, () => console.info(`Server running on port ${PORT}`));
