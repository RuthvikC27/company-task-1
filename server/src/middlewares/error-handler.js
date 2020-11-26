const errorHandler = (errObj, req, res, next) => {
    // console.log(errObj)
    res.status(errObj.statusCode).send({
        errors: errObj.errors
    })
}

module.exports = errorHandler