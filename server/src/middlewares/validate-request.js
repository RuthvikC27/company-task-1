const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
    try{
        const {errors} = validationResult(req);
        // console.log(errors)
        if(errors.length > 0){
            throw errors;
        }
        else{
            next();
        }
    }catch(err){
        // console.log(err)
         next({
            statusCode: 400,
            errors: err
        });
    }
}