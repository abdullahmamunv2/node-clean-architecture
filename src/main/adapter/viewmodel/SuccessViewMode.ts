import ViewModel from './ViewModel'

export default class SuccessViewModel<T> extends ViewModel<T>{
    constructor(data:T,responseStatus :string,httpStatusCode:number=200){
        super(data,responseStatus,httpStatusCode);
    }
    getResponse(){
        return {
            status : this.responseStatus,
            data :   this.data
        }
    }
}

