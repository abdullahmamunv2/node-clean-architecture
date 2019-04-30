import { IQuery } from "@core/domain";

export default interface IRepository<T,K> {
    readAll(query:IQuery):T[];
    read(id:K):T;
    create(entity:T) : T;
    update(entity:T) :T;
    delete(entity:T) :T;
}