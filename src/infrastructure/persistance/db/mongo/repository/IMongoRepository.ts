import { IQuery } from "@core/domain";
import { IRepository } from "@infrastructure/repostiory";

export default interface IMongoRepository<T> extends IRepository<T,string> {
    read(id:string):Promise<T|null>;

}