import { Request, Response, RequestHandler } from "express";

export const createUser: RequestHandler = async (_: Request, res: Response) => {
  res.send("Hello World");
};
