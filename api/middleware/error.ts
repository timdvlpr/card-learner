const errorHandler = (err, req, res, next) => {
    const { statusCode, message } = err;
    res.status(statusCode).json({
        success: false,
        message
    });
}

module.exports = errorHandler;
