const customError = (
  message = "internal error",
  statusCode = 500,
  errors = null,
) => {
  const newError = new Error(message);
  newError.statusCode = statusCode;
  if (errors) newError.errors = errors;
  throw newError;
};

const errorMiddleware = (error, request, response, next) => {
  const statusCode = error.statusCode || 500;
  const responseBody = {
    status: statusCode,
    message: error.message,
  };
  if (error.errors) {
    responseBody.errors = error.errors;
  }
  response.status(statusCode).json(responseBody);
};

export { customError, errorMiddleware };
