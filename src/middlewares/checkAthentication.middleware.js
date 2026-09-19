import { customError } from "../utils/errorHandler.util.js";
import { checkJwtToken } from "../utils/jwtHelper.util.js";

const checkAthentication = (req, res, next) => {
  let token = req.headers.authorization;
  token = token?.split(" ")[1];
  if (!token) customError("Please send token or login first!", 401);
  const verifiedToken = checkJwtToken(token);
  if (!verifiedToken) customError("Your token is not valid!", 401);
  req.user = verifiedToken;
  console.log(verifiedToken);
  next();
};

export { checkAthentication };
