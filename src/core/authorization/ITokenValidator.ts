export default interface ITokenValidator<V> {
    validate(token:string[]):Promise<V>
}