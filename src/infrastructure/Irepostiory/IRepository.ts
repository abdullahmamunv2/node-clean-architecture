
export default interface IRepository<T,KEY,QUERY> {
    readAll(query:QUERY):Promise<T[]|null>;
    read(id:KEY):Promise<T|null>;
    create(entity:T) : Promise<T|null>;
    update(entity:T) :Promise<T|null>;
    delete(entity:T) :Promise<T|null>;
}