import IQuery from "./IQuery";

export default interface IQueryBuilder<T,V> {
    page(page : number):this;
    limit(limit : number) : this;
    condition(conditions : T | T[] ) : this;
    sort(orders : V | V[] ) : this;
    build() : IQuery<T,V>;
}