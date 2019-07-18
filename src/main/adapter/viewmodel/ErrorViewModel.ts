import ViewModel from "./ViewModel"

export default class ErrorViewModel<T> extends ViewModel<T>{
    constructor(data:T,responseStatus :string,httpStatusCode:number=500){
        super(data,responseStatus,httpStatusCode);
    }
    getResponse(){
        return {
            status : this.responseStatus,
            error :   this.data
        }
    }
}

