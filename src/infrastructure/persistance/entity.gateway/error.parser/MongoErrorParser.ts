import { injectable, inject } from "@core/di";
import {EntityGatewayError} from "@core/exceptions";
import { IEntityGatewayErrorParser } from "@core/domain/entity.gateway";
import {Error} from "mongoose";

@injectable()
export default class MongoErrorParser implements IEntityGatewayErrorParser{
    generate(error: any): EntityGatewayError[] {
        let errors : EntityGatewayError[] = [];
        if(error instanceof Error.DocumentNotFoundError){
            errors.push({
                message: error.message,
                errorCode : 0,
            });
        }
        else if(error instanceof Error.ValidationError){
            errors.push({
                message: error.message,
                errorCode : 0,
            });
        }
        else{
            errors.push({
                message: error.message,
                errorCode : 0,
            });
        }
        return errors;
    }

}