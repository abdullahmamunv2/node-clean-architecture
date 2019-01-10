
export class BaseResponse {
    code  : any = 0;
    error : Error|null = null ; 
    constructor(){

    }
    hasError(){
        return this.error!=null;
    }
}

export class ID<T> {
    private id : T;
    constructor(id : T){
        this.id = id;
    }
    public getVal() : T{
        return this.id;
    } 
}