import { Request, Response, RequestHandler } from "express";
import UserSchema from "../schema/user.schema";

export const getAllUsers: RequestHandler = async (_: Request, res: Response) => {
  const users = await UserSchema.find();
  res.send(users);
}

export const createUser: RequestHandler = async (_: Request, res: Response) => {
  res.send("Hello World");
};
