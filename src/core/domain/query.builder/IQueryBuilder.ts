import IQuery from "./IQuery";
import { ICondition } from ".";
import ISort from "./ISort";

export default interface IQueryBuilder {
    page(page : number):this;
    limit(limit : number) : this;
    condition(conditions : ICondition | ICondition[] ) : this;
    sort(orders : ISort | ISort[] ) : this;
    build() : IQuery;
}