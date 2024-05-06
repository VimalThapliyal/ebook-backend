import express from "express";
import { createBook } from "./bookController";
import path from "node:path";
import multer from "multer";

const bookRouter = express.Router();

const upload = multer({
  dest: path.join(__dirname, "../../public/uploads"),
  // todo put limit 10mb max
  limits: { fileSize: 5e7 },
});

bookRouter.post(
  "/",
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook
);

export default bookRouter;
