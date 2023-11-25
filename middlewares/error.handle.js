function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    //it shows where is the error
    stack: err.stack,
  });
}

module.exports = { logErrors, errorHandler };
