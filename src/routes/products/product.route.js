import express from "express";
import { checkAthentication } from "../../middlewares/checkAthentication.middleware.js";
import { checkAdminAuthorization } from "../../middlewares/checkAthorization.middleware.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductDetails,
  postImagesToProduct,
  updateProduct,
} from "../../controllers/productController.js";
import { uploader } from "../../utils/productImage.util.js";
import {
  addImagesToProductValidation,
  createProductValidation,
  deleteProductByIdValidation,
  getProductByIdValidation,
  updateProductValidation,
} from "../../validators/productValidator.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProductByIdValidation, getProductDetails);

productRouter.post(
  "/",
  checkAthentication,
  checkAdminAuthorization,
  createProductValidation,
  createProduct,
);

productRouter.put(
  "/:id",
  checkAthentication,
  checkAdminAuthorization,
  updateProductValidation,
  updateProduct,
);

productRouter.delete(
  "/:id",
  checkAthentication,
  checkAdminAuthorization,
  deleteProductByIdValidation,
  deleteProduct,
);

productRouter.post(
  "/:id/images",
  uploader.array("images", 5),
  checkAthentication,
  checkAdminAuthorization,
  addImagesToProductValidation,
  postImagesToProduct,
);

export { productRouter };
