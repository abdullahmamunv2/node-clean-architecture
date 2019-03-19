import {RequestModelBody} from "@core/RRmodel/request";
import {
    IQuery
   } from '@core/domain'
export class ReadAddessModel extends RequestModelBody {
    public id          : string|number;
    constructor(id:string|number){
        super();
        this.id = id;
    }
}



export class ReadAllModel extends RequestModelBody {
    query :IQuery
    constructor(query:IQuery){
        super();
        this.query = query;
    }
}