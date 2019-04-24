export default interface IValidatorGateway<T,S>{
    validateData(data:T,schema:S):Promise<T>;
}