import {Error} from "mongoose";
import {
    EntityException
    } from '@core/domain'

export default  (error : Error)=>{
    if(error instanceof Error.DocumentNotFoundError){
        return new EntityException.NoResourceFoundError(error.message,error.name);
    }
    else if(error instanceof Error.ValidationError){
        return new EntityException.BadRequest(error.message,error.name);
    }
    else{
        return new EntityException.UnKnownError(error.message,error.name);
    }
}
