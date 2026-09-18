import express from "express";
import { userProfile } from "../../controllers/userController.js";
import { checkAthentication } from "../../middlewares/checkAthentication.middleware.js";

const userRouter = express.Router();

userRouter.get("/profile", checkAthentication, userProfile);

export { userRouter };