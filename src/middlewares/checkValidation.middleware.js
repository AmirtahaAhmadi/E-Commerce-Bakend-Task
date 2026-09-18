import validator from "express-validator";
import { customError } from "../utils/errorHandler.util.js";

const checkValidation = (req, res, next) => {
  const err = validator.validationResult(req);
  if (!err.isEmpty()) {
    return customError("Validation error!", 422, err.mapped());
  }
  next();
};

export { checkValidation };
