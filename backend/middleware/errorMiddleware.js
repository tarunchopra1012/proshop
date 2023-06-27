const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {

    console.log('Error Object', err);

    console.log(err.stack);

    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // Check for Mongoose bad ObjectId
    if(err.name === 'CastError' && err.kind === 'ObjectId') {
        message = 'Resource not found.';
        statusCode = 404;
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? 'cookie' : err.stack
    });
}

export { notFound, errorHandler };