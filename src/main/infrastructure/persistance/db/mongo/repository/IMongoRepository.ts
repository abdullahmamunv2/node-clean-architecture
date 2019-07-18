import { IQuery } from "@core";
import { IRepository } from "@infrastructure";

export default interface IMongoRepository<T> extends IRepository<T,string,IQuery> {
    
}