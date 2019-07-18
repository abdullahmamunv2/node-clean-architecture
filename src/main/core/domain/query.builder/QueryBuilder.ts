import IQueryBuilder from "./IQueryBuilder";
import IQuery from "./IQuery";
import Query from "./Query";
import ISort from "./ISort";
import ICondition from "./ICondition";


export default class QueryBuilder implements IQueryBuilder{
    _page: number=1;
    _limit: number=100;
    _conditions: ICondition[]=[];
    _orders: ISort[]=[];

    page(page: number): this {
        this._page = page;
        return this;
    }    
    limit(limit: number): this {
        this._limit = limit;
        return this;
    }
    condition(conditions: ICondition | ICondition[]): this {
        if(conditions==null)
            return this;
        if(conditions instanceof Array){
            conditions.forEach((condition :ICondition)=>{
                this._conditions.push(condition);
            })
        }
        else{
            this._conditions.push(conditions);
        }

        return this;
    }
    sort(orders: ISort | ISort[]): this {
        if(orders==null)
            return this;
        if(orders instanceof Array){
            orders.forEach((order :ISort)=>{
                this._orders.push(order);
            })
        }
        else{
            this._orders.push(orders);
        }
        return this;
    }

    build(page:number = 1,limit:number=100): IQuery {
        let query = new Query(page,limit);
        if(this._conditions.length > 0){
            this._conditions.forEach((condition)=>{
                query.conditions.push(condition);
            })
        }
        if(this._orders.length > 0){
            this._orders.forEach((order)=>{
                query.orders.push(order);
            })
        }
        return query;
    }
}