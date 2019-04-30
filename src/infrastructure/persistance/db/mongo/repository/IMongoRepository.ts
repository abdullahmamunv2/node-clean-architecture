import { IQuery } from "@core/domain";
import { IRepository } from "@infrastructure/repostiory";

export default interface IMongoRepository<T> extends IRepository<T,string> {
    readAll(query:IQuery):T[];
    read(id:string):T;
    create(entity:T) : T;
    update(entity:T) :T;
    delete(entity:T) :T;
}