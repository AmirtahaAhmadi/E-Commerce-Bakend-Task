import { customError } from "../utils/errorHandler.util.js";
import { prisma } from "../utils/prisma/prisma.util.js";
import {
  comparePassword,
  hashPassword,
} from "../utils/hashPasswordHandler.util.js";
import { createJwtToken } from "../utils/jwtHelper.util.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  const data = await prisma.User.findFirst({
    where: {
      email: email,
    },
  });
  if (!data) {
    return customError(
      "There is no account with this email! Please Sign up first",
      404,
    );
  } else {
    const checkPass = await comparePassword(password, data.password);
    if (!checkPass) {
      return customError("Password is not correct!", 400);
    } else {
      const token = createJwtToken({
        id: data.id,
        role: data.role,
      });
      return res.status(200).json({
        success: true,
        token: token,
        message: "You are successfully loged in!",
      });
    }
  }
};

const register = async (req, res) => {
  const { email, password, username } = req.body;
  const existingEmail = await prisma.User.findUnique({
    where: {
      email: email,
    },
  });
  if (existingEmail) {
    return customError(
      "There is an account exist with this email! Please enter unique email",
      409,
    );
  }
  const hashedPass = await hashPassword(password);
  const newUser = await prisma.User.create({
    data: {
      email: email,
      password: hashedPass,
      username: username,
    },
  });
  return res.status(201).json({
    success: true,
    data: newUser,
    message: "You are successfully registered!",
  });
};

export { login, register };
