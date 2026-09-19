import validator from "express-validator";

const getProductByIdValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter product id!")
    .isString()
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
    .toInt()
    .isInt()
    .withMessage("Price must be number!"),
  validator
    .body("stock")
    .notEmpty()
    .withMessage("Please enter product stock!")
    .toInt()
    .isInt()
    .withMessage("Stock must be number!"),
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
    .isString()
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
    .toInt()
    .isInt()
    .withMessage("Price must be number!"),
  validator
    .body("stock")
    .notEmpty()
    .withMessage("Please enter product stock!")
    .toInt()
    .isInt()
    .withMessage("Stock must be number!"),
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
    .isString()
    .withMessage("Id is not valid!"),
];

const addImagesToProductValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter product id!")
    .isString()
    .withMessage("Id is not valid!"),
];

export {
  getProductByIdValidation,
  createProductValidation,
  updateProductValidation,
  deleteProductByIdValidation,
  addImagesToProductValidation,
};
