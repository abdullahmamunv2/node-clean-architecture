import { BaseResponse,ID } from "../base";

export class CreateModel extends BaseResponse {
    public id! : ID<number>;
    public countryName : string = "Bangladesh";
    public countryCode : string = "BD";
    public type        : string = "";
}

export class ReadModel extends BaseResponse {
    public id! : ID<number>;
}

export class ReadAllModel extends BaseResponse {
    public page : number=1;
    public limit : number=10;
    
}

export class UpdateModel extends BaseResponse {

}

export class DeleteModel extends BaseResponse {
    
}