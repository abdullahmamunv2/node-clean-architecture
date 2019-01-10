import { IQueryBuilder } from "./IQueryBuilder";
import {Query,Condition,SortItem} from "."


export class QueryBuilder  implements IQueryBuilder{
    _page: number=1;
    _limit: number=100;
    _conditions: Condition<string | number>[]=[];
    _orders: SortItem<string | number>[]=[];

    restore(){
        this._page=1;
        this._limit=100;
        this._conditions=[];
        this._orders =[];
    }

    page(page: number): this {
        this._page = page;
        return this;
    }    
    limit(limit: number): this {
        this._limit = limit;
        return this;
    }
    condition(conditions: Condition<string | number> | Condition<string | number>[]): this {
        if(conditions==null)
            return this;
        if(conditions instanceof Array){
            conditions.forEach((condition :Condition<string | number> )=>{
                this._conditions.push(condition);
            })
        }
        else{
            this._conditions.push(conditions);
        }

        return this;
    }
    sort(orders: SortItem<string | number> | SortItem<string | number>[]): this {
        if(orders==null)
            return this;
        if(orders instanceof Array){
            orders.forEach((order :SortItem<string | number> )=>{
                this._orders.push(order);
            })
        }
        else{
            this._orders.push(orders);
        }
        return this;
    }

    build(): Query {
        let query = new Query();
        //query.
        query.page = this._page;
        query.limit = this._limit;
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
        this.restore();
        return query;
    }



}