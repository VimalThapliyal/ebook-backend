import express, { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import globalErrorHanlder from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();

// Routes
app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to elib apis" });
});

app.use("/api/users/", userRouter);

// Global Error handler
app.use(globalErrorHanlder);

export default app;
