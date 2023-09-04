import { Request, Response, RequestHandler } from "express";
import userService from "../services/user.service"

const getAllUsers: RequestHandler = async (_: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      message: "Users fetched successfully",
      data: users
    })
  } catch (err) {
    res.status(500).json({
      message: "Error fetching users",
      data: err
    })
  }
}

const createUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: user
    })
  } catch (err) {
    res.status(500).json({
      message: "Error creating user",
      data: err.message
    })
  }
};

export default {
  getAllUsers,
  createUser
}
