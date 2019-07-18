export default interface IErrorParser<T,V>{
    generate(error:T):V;
}