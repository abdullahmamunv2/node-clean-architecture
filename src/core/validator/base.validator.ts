import {ReqModel} from '../RRmodel'


export default  interface BaseValidator{
    validate(reqModel : ReqModel.BaseRequst) : Promise<any>;
}