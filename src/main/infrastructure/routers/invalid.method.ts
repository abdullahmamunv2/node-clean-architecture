import {Request,Response,NextFunction}     from 'express';

export default  (req : Request,res : Response,next : NextFunction)=>{
    res.status(405).send({
        type  : 'METHOD_NOT_ALLOWED',
        error : {
            message : "please follow the convention. {protocol}://{baseurl}/{version}/{resource}."
        } 
    })
}
