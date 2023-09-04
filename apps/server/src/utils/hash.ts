import bcrypt from "bcrypt";

const salts = parseInt(process.env.SALT_ROUNDS || "10");

const hash = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(salts);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("Unknown error");
  }
};

export default hash;
