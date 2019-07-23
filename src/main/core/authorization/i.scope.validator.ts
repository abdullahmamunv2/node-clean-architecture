export default interface IScopeValidator<T> {
    validate(token:string):Promise<T>
}