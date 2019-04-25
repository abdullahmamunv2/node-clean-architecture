import IQueryBuilder from "./IQueryBuilder";
import Query from "./Query";


export default class QueryBuilder<T,V>  implements IQueryBuilder<T,V>{
    _page: number=1;
    _limit: number=100;
    _conditions: T[]=[];
    _orders: V[]=[];

    page(page: number): this {
        this._page = page;
        return this;
    }    
    limit(limit: number): this {
        this._limit = limit;
        return this;
    }
    condition(conditions: T | T[]): this {
        if(conditions==null)
            return this;
        if(conditions instanceof Array){
            conditions.forEach((condition :T)=>{
                this._conditions.push(condition);
            })
        }
        else{
            this._conditions.push(conditions);
        }

        return this;
    }
    sort(orders: V | V[]): this {
        if(orders==null)
            return this;
        if(orders instanceof Array){
            orders.forEach((order :V)=>{
                this._orders.push(order);
            })
        }
        else{
            this._orders.push(orders);
        }
        return this;
    }

    build(page:number = 1,limit:number=100): Query<T,V> {
        let query = new Query<T,V>(page,limit);
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