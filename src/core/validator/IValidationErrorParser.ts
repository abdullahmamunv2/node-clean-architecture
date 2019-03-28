export default interface IValidationErrorParser<T,V>{
    generate(error:T):V[];
}