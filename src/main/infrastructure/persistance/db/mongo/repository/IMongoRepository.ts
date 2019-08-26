import { IQuery } from "@core/domain";
import { IRepository } from "@infrastructure/Irepostiory";

export default interface IMongoRepository<T> extends IRepository<T,string,IQuery> {
    
}