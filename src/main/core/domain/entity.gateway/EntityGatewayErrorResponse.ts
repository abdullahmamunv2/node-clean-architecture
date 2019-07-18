import { ErrorResponse, EntityGatewayError } from "@core";
import IEntityGatewayResponse from "./IEntityGatewayErrorResponse";

export default class EntityGatewayErrorResponse implements IEntityGatewayResponse{
    errorResponse : ErrorResponse<EntityGatewayError>|null = null;
    constructor(errorResponse : ErrorResponse<EntityGatewayError> | null){
        this.errorResponse = errorResponse;
    }
    getResponse():ErrorResponse<EntityGatewayError>|null {
        return this.errorResponse;
    }    
    hasError(): boolean {
        if(!this.errorResponse)
            return false;
        return this.errorResponse.hasError();
    }

    

}