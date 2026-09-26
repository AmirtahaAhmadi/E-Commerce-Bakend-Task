import validator from "express-validator";

const getProductByIdValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter product id!")
    .isUUID()
    .withMessage("Id is not valid!"),
];

const createProductValidation = [
  validator
    .body("title")
    .notEmpty()
    .withMessage("Please enter product title!")
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage("Product title is not valid!"),
  validator
    .body("price")
    .notEmpty()
    .withMessage("Please enter product Price!")
    .isFloat()
    .withMessage("Price must be number!")
    .toFloat(),
  validator
    .body("stock")
    .notEmpty()
    .withMessage("Please enter product stock!")
    .isInt()
    .withMessage("Stock must be number!")
    .toInt(),
  validator
    .body("description")
    .notEmpty()
    .withMessage("Please enter product description!")
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage("Product description is not valid!"),
  validator
    .body("categoryId")
    .notEmpty()
    .withMessage("Please enter product categoryId!")
    .isString()
    .withMessage("Product categoryId is not valid!"),
];

const updateProductValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter product id!")
    .isUUID()
    .withMessage("Id is not valid!"),
  validator
    .body("title")
    .notEmpty()
    .withMessage("Please enter product title!")
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage("Product title is not valid!"),
  validator
    .body("price")
    .notEmpty()
    .withMessage("Please enter product Price!")
    .isFloat()
    .withMessage("Price must be number!")
    .toFloat(),
  validator
    .body("stock")
    .notEmpty()
    .withMessage("Please enter product stock!")
    .isInt()
    .withMessage("Stock must be number!")
    .toInt(),
  validator
    .body("description")
    .notEmpty()
    .withMessage("Please enter product description!")
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage("Product description is not valid!"),
  validator
    .body("categoryId")
    .notEmpty()
    .withMessage("Please enter product categoryId!")
    .isString()
    .withMessage("Product categoryId is not valid!"),
];

const deleteProductByIdValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter product id!")
    .isUUID()
    .withMessage("Id is not valid!"),
];

const addImagesToProductValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter product id!")
    .isUUID()
    .withMessage("Id is not valid!"),
];

export {
  getProductByIdValidation,
  createProductValidation,
  updateProductValidation,
  deleteProductByIdValidation,
  addImagesToProductValidation,
};
