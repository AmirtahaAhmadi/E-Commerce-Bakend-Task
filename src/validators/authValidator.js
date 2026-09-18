import validator from "express-validator";

const loginValidation = [
  validator
    .body("email")
    .notEmpty()
    .withMessage("Please enter your email!")
    .isString()
    .isEmail()
    .withMessage("Your email is not valid!"),
  validator
    .body("password")
    .notEmpty()
    .withMessage("Please enter your password!")
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage("Your password is not valid!"),
];

const registerValidation = [
  validator
    .body("email")
    .notEmpty()
    .withMessage("Please enter your email!")
    .isString()
    .isEmail()
    .withMessage("Your email is not valid!"),
  validator
    .body("password")
    .notEmpty()
    .withMessage("Please enter your password!")
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage("Your email is not valid!"),
  validator
    .body("username")
    .notEmpty()
    .withMessage("Please enter your username!")
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage("Your name is not valid!"),
];

export { loginValidation, registerValidation };
