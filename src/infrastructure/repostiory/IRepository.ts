export default interface IRepository<T, K> {
    readAll():T[];
    read(id:K):T;
    create(entity:T) : T;
    update(entity:T) :T;
    delete(entity:T) :T;
}