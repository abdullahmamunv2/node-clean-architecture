const {ApiError}     = require('../util');
const {HTTP_CODE}    = require('../constants');

function prepareErrorResponse(error){
    if(error instanceof ApiError){
        return {
            status  : error.status,
            message : error.message,
        };
    }
    else{
        error.statusCode = HTTP_CODE.INTERNAL_SERVER_ERROR;
        return {
            status : ApiError.STATUS.ERROR,
            message : 'Internal server error.'
        }
    }
}


higherOrderHandler =  (promise,params) => async(req,res,next)=>{
        const boundParams = params ? params(req, res, next) : [];
        try {
            console.log(promise);
            const result = await promise(...boundParams);
            let code = result.code;
            if(code){
                delete result.code;
                return res.status(code).json(result);
            }
            else
                return res.json(result);
        } catch (error) {
            console.log(error);
            let response = prepareErrorResponse(error);
            res.status(error.statusCode).json(response);
            
        }
    }


module.exports = higherOrderHandler;