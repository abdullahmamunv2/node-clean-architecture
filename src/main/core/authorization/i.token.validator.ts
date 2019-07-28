export default interface ITokenValidator {
    validate(token:string):Promise<boolean>
}