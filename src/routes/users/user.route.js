import express from "express";
import {
  deleteUserFavorite,
  deleteUserImage,
  getUserFavorites,
  getUserImages,
  giveRoleToUser,
  postImageToUser,
  postUserFavorite,
  userProfile,
} from "../../controllers/userController.js";
import { checkAthentication } from "../../middlewares/checkAthentication.middleware.js";
import { checkAdminAuthorization } from "../../middlewares/checkAthorization.middleware.js";
import { userUploader } from "../../utils/userImage.util.js";
import {
  deleteUserFavoriteValidation,
  deleteUserImageValidation,
  giveRoleToUserValidation,
  postImageToUserValidation,
  postUserFavoriteValidation,
} from "../../validators/userValidator.js";

const userRouter = express.Router();

userRouter.get("/profile", checkAthentication, userProfile);

userRouter.post(
  "/:id/role",
  checkAthentication,
  checkAdminAuthorization,
  giveRoleToUserValidation,
  giveRoleToUser,
);

userRouter.get("/images", checkAthentication, getUserImages);

userRouter.post(
  "/images",
  userUploader.array("images", 5),
  checkAthentication,
  postImageToUserValidation,
  postImageToUser,
);

userRouter.delete(
  "/:id/images",
  checkAthentication,
  deleteUserImageValidation,
  deleteUserImage,
);

userRouter.get("/favorites", checkAthentication, getUserFavorites);

userRouter.post(
  "/:id/favorites",
  checkAthentication,
  postUserFavoriteValidation,
  postUserFavorite,
);

userRouter.delete(
  "/:id/favorites",
  checkAthentication,
  deleteUserFavoriteValidation,
  deleteUserFavorite,
);

export { userRouter };
