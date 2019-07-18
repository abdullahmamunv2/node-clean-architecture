export default interface IScopeValidator<V> {
    validate(token:string):Promise<V>
}