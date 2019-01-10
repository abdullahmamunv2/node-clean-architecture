

module.exports = (req,res,next)=>{
    res.status(405).send({
        type  : 'METHOD_NOT_ALLOWED',
        error : {
            message : "please follow the convention. {protocol}://{baseurl}/{version}/{resource}."
        } 
    })
}