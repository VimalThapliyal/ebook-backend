import express from "express";
import { createBook } from "./bookController";
import path from "node:path";
import multer from "multer";

const bookRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "coverImage", maxCount: 1 },
  { name: "file", maxCount: 1 },
]);

bookRouter.post("/", upload, createBook);

export default bookRouter;
