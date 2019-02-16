
export class BaseResponse {
    code  : any = 0;
    error : Error|null = null ; 
    constructor(){

    }
    hasError(){
        return this.error!=null;
    }
}

