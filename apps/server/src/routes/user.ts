import { Router } from "express";
import userController from "../controllers/user";

const userRouter = Router();

userRouter.get("/users", userController.getAllUsers);
userRouter.post("/users", userController.createUser);
userRouter.get("/user/:id?", userController.getUserById);
userRouter.delete("/users/:id?", userController.deleteUser);

export default userRouter;
