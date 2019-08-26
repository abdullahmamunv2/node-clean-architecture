export default interface ITokenParser<V> {
    parse(token:string):Promise<V>
}