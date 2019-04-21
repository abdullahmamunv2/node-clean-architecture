import {
    IQuery
   } from '@core/domain'
export class ReadAddessModel  {
    public id          : string|number;
    constructor(id:string|number){
        this.id = id;
    }
}



export class ReadAllModel {
    query :IQuery
    constructor(query:IQuery){
        this.query = query;
    }
}