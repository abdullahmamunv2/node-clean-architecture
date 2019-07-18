export  interface IResponseMapper<T,V>{
    map(param :T)   : V
}