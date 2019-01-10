import { IQuery, SortItem } from ".";
import { Condition } from ".";

export interface IQueryBuilder {
    page(page : number):this;
    limit(limit : number) : this;
    condition(conditions : Condition<number|string> | Condition<number|string>[] ) : this;
    sort(orders : SortItem<number|string> | SortItem<number|string>[] ) : this;
    build() : IQuery;
}