import express, { NextFunction, Request, Response } from "express";
import globalErrorHanlder from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to elib apis" });
});

app.use("/api/users/", userRouter);
app.use("/api/books/", bookRouter);

// Global Error handler
app.use(globalErrorHanlder);

export default app;
