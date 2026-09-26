import validator from "express-validator";

const getCategoryByIdValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter category id!")
    .isUUID()
    .withMessage("Id is not valid!"),
];

const createCategoryValidation = [
  validator
    .body("name")
    .notEmpty()
    .withMessage("Please enter category name!")
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage("Category name is not valid!"),
  validator
    .body("description")
    .optional()
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage("Category description is not valid!"),
];

const getCategoryProducts = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter category id!")
    .isUUID()
    .withMessage("Id is not valid!"),
];

const updateCategoryValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter category id!")
    .isUUID()
    .withMessage("Id is not valid!"),
  validator
    .body("name")
    .notEmpty()
    .withMessage("Please enter category name!")
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage("Category name is not valid!"),
  validator
    .body("description")
    .optional()
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage("Category description is not valid!"),
];

const deleteCategoryByIdValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter category id!")
    .isUUID()
    .withMessage("Id is not valid!"),
];

export {
  getCategoryByIdValidation,
  getCategoryProducts,
  createCategoryValidation,
  updateCategoryValidation,
  deleteCategoryByIdValidation,
};
