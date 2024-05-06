import { Request, Response, NextFunction } from "express";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  // const {} = req.body;
  // const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  console.log("files", req.files);

  // const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  res.json({});
};

export { createBook };
