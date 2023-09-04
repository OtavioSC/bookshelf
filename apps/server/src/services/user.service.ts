import UserSchema from "../schema/user.schema";

const getAllUsers = async () => {
  try {
    const users = await UserSchema.find();
    return users;
  } catch (err) {
    throw new Error(err);
  }
}

const createUser = async (user) => {
  const { email, password, firstName, lastName } = user;

  const existedUser = await UserSchema.findOne({ 'email.address': email.address });

  if (existedUser) {
    throw new Error("An user with this email address already exists");
  }

  try {
    const newUser = new UserSchema({
      email: email,
      password: password,
      profile: {
        firstName: firstName,
        lastName: lastName
      }
    });
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    throw new Error(err);
  }
}

export default {
  getAllUsers,
  createUser
}
