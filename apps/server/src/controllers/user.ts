import { Request, Response, RequestHandler } from "express";
import userService from "../services/user"

interface RequestWithId extends Request {
  query: {
    id?: string | undefined
  }
}

const getUserById: RequestHandler = async (req: RequestWithId, res: Response) => {
  const { id } = req.query;

  try {
    const user = await userService.getUserById(id);
    res.status(200).json({
      message: "User fetched successfully",
      data: user
    })
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: "Error fetching user",
        data: err.message
      })
      return
    }
    res.status(500).json({
      message: "Error fetching user",
      data: "Unknown error"
    })
  }
}

const getAllUsers: RequestHandler = async (_: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      message: "Users fetched successfully",
      data: users
    })
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: "Error fetching users",
        data: err.message
      })
    }
    res.status(500).json({
      message: "Error fetching users",
      data: "Unknown error"
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
    if (err instanceof Error) {
      res.status(500).json({
        message: "Error creating user",
        data: err.message
      })
      return
    }
    res.status(500).json({
      message: "Error creating user",
      data: "Unknown error"
    })
  }
};

const deleteUser: RequestHandler = async (req: RequestWithId, res: Response) => {
  const { id } = req.query;

  try {
    await userService.deleteUser(id);
    res.status(200).json({
      message: "User deleted successfully",
      data: {
        id: id
      }
    })
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({
        message: "Error deleting user",
        data: err.message
      })
      return
    }
    res.status(500).json({
      message: "Error deleting user",
      data: "Unknown error"
    })
  }
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser
}
