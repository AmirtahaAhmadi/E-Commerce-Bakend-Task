import express from "express";
import { login, register } from "../../controllers/authController.js";
import { checkValidation } from "../../middlewares/checkValidation.middleware.js";
import {
  loginValidation,
  registerValidation,
} from "../../validators/authValidator.js";

const authRouter = express.Router();

authRouter.post("/login", loginValidation, checkValidation, login);
authRouter.post("/register", registerValidation, checkValidation, register);

export { authRouter };
