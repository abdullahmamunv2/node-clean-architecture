import { IQuery } from "@core/domain";

export default interface IRepository<T,K> {
    readAll(query:IQuery):Promise<T[]|null>;
    read(id:K):Promise<T|null>;
    create(entity:T) : Promise<T|null>;
    update(entity:T) :Promise<T|null>;
    delete(entity:T) :Promise<T|null>;
}