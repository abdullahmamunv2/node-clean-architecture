

/**
 * @param request : Authorization header
 *
 */
export default interface IAuthorization<U,V> {
    authorize(request:U):Promise<V>
}