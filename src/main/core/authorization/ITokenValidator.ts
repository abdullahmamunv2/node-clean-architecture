export default interface ITokenValidator<V> {
    validate(type:string,token:string):Promise<V>
}