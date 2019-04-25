import { 
    IListSort,
    IPagination,
    IListCondition,
} from "./";

export default interface IQuery<T,V> extends IPagination,IListSort<T>,IListCondition<V>{

}