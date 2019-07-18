import IQuery from "./IQuery";
import { ICondition } from ".";
import ISort from "./ISort";

export default class Query implements IQuery{
    
    page: number;
    limit: number;
    conditions: ICondition[]=[];
    orders: ISort[]=[];
    constructor(page:number,limit:number){
        this.page = page;
        this.limit = limit;
    }
    getSorts(): ISort[] {
        return this.orders;
    }
    getConditions(): ICondition[] {
        return this.conditions;
    }
    
}