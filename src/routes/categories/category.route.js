import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryDetails,
  updateCategory,
} from "../../controllers/categoryController.js";
import { checkAthentication } from "../../middlewares/checkAthentication.middleware.js";
import { checkAdminAuthorization } from "../../middlewares/checkAthorization.middleware.js";
import {
  createCategoryValidation,
  deleteCategoryByIdValidation,
  getCategoryByIdValidation,
  updateCategoryValidation,
} from "../../validators/categoryValidator.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);

categoryRouter.get("/:id", getCategoryByIdValidation, getCategoryDetails);

categoryRouter.post(
  "/",
  checkAthentication,
  checkAdminAuthorization,
  createCategoryValidation,
  createCategory,
);

categoryRouter.put(
  "/:id",
  checkAthentication,
  checkAdminAuthorization,
  updateCategoryValidation,
  updateCategory,
);

categoryRouter.delete(
  "/:id",
  checkAthentication,
  checkAdminAuthorization,
  deleteCategoryByIdValidation,
  deleteCategory,
);

export { categoryRouter };
