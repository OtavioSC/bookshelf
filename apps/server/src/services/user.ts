import UserSchema from "../schema/user";
import User from "../types/types";
import hash from "../utils/hash";

const getAllUsers = async () => {
  try {
    const users = await UserSchema.find();
    return users;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("Unknown error");
  }
};

const getUserById = async (id: string | undefined) => {
  const existedUser = await UserSchema.findById(id);

  if (!existedUser) {
    throw new Error("User not found");
  }

  try {
    const user = await UserSchema.findById(id);
    return user;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("Unknown error");
  }
};

const createUser = async (user: User) => {
  const { email, password, profile } = user;

  const existedUser = await UserSchema.findOne({
    "email.address": email.address,
  });

  if (existedUser) {
    throw new Error("An user with this email address already exists");
  }

  const hashedPassword = await hash(password);

  try {
    const newUser = new UserSchema({
      email: email,
      password: hashedPassword,
      profile: {
        firstName: profile.firstName,
        lastName: profile.lastName,
      },
    });
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("Unknown error");
  }
};

const deleteUser = async (id: string | undefined) => {
  const existedUser = await UserSchema.findById(id);

  if (!existedUser) {
    throw new Error("User not found");
  }

  try {
    await UserSchema.deleteOne({ _id: id });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("Unknown error");
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
};
