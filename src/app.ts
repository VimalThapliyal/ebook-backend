import express, { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import globalErrorHanlder from "./middlewares/globalErrorHandler";

const app = express();

// Routes
app.get("/", (req, res, next) => {
  const error = createHttpError(400, "something went wrong");
  throw error;
  res.json({ message: "Welcome to elib apis" });
});

// Global Error handler
app.use(globalErrorHanlder);

export default app;
