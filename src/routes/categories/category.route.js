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
  getCategoryProducts,
  updateCategoryValidation,
} from "../../validators/categoryValidator.js";
import { getProductsByCategoryId } from "../../controllers/productController.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategories);

categoryRouter.get("/:id", getCategoryByIdValidation, getCategoryDetails);

categoryRouter.get("/:id/products", getCategoryProducts, getProductsByCategoryId);

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
