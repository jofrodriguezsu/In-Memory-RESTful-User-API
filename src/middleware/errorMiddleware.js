
const errorMiddleware = (error, req, res, next) => {
  console.error(error)

  const statusCode = error.statusCode || 500
  const message = error.message || "Server error"

  res.status(statusCode).json({
    success: false,
    message
  })
}

module.exports = errorMiddleware