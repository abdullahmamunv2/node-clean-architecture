export  interface IRepositoryMapper<T,V>{
    map(param :T)   : V
}