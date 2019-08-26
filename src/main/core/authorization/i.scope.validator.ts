export default interface IScopeValidator {
    validate(scopes:string[]):Promise<boolean>
}