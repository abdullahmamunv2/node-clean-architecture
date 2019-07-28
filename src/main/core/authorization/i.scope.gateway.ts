
export default interface IScopeGateway {
    get(resourceId:string):Promise<String[]>
}