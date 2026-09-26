import validator from "express-validator";

const giveRoleToUserValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter user id!")
    .isUUID()
    .withMessage("Id is not valid!"),
];

const postImageToUserValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter user id!")
    .isUUID()
    .withMessage("Id is not valid!"),
];

const deleteUserImageValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter user image id!")
    .isUUID()
    .withMessage("Id is not valid!"),
];

const postUserFavoriteValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter product id!")
    .isUUID()
    .withMessage("Id is not valid!"),
];

const deleteUserFavoriteValidation = [
  validator
    .param("id")
    .notEmpty()
    .withMessage("Please enter product id!")
    .isUUID()
    .withMessage("Id is not valid!"),
];

export {
  giveRoleToUserValidation,
  postImageToUserValidation,
  deleteUserImageValidation,
  postUserFavoriteValidation,
  deleteUserFavoriteValidation,
};
