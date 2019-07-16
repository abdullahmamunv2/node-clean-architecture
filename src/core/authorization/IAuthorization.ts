

export default interface IAuthorization<Request,Response> {
    authorize(request:Request):Promise<Response>
}