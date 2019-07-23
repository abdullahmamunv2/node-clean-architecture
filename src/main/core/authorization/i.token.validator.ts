export default interface ITokenValidator<T> {
    validate(type:string,token:string):Promise<T>
}