import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
const createJwtToken = (data) => {
  const token = jwt.sign(data, secret, { expiresIn: "7d" });
  return token;
};

const checkJwtToken = (token) => {
  try {
    const checkToken = jwt.verify(token, secret);
    return checkToken;
  } catch (error) {
    return undefined;
  }
};

export { createJwtToken, checkJwtToken };
