import { customError } from "../utils/errorHandler.util.js";

const checkAuthorization = (req, res, next, role) => {
  const user = req.user;
  if (!user) customError("User token is not valid! Please login", 401);
  if (user.role != role)
    customError("You don't have access for this action", 403);
  next();
};

const checkAdminAuthorization = (request, response, next) =>
  checkAuthorization(request, response, next, "admin");

export { checkAdminAuthorization };
