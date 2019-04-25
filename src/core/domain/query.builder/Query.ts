import IQuery from "./IQuery";

export default class Query<T,V> implements IQuery<T,V>{
    
    page: number;
    limit: number;
    conditions: T[]=[];
    orders: V[]=[];
    constructor(page:number,limit:number){
        this.page = page;
        this.limit = limit;
    }
    getSorts(): T[] {
        throw new Error("Method not implemented.");
    }
    getConditions(): V[] {
        throw new Error("Method not implemented.");
    }
    
}