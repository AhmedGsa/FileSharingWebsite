const CustomAPIError = require("../errors/custom-error")
const NotFoundError = require("../errors/not-found")

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        if (err instanceof NotFoundError) {
            console.log(err);
            return res.render("error", { msg: err.message , statusCode: err.statusCode});
        } else {
            return res.status(err.statusCode).json({msg: err.message});
        }
    } else {
        res.render("error", { msg: err.message , statusCode: err.statusCode});
    }
}

module.exports = errorHandler;