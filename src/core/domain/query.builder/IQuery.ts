import { 
    IListSort,
    IPagination,
    IListCondition,
} from "./";

export default interface IQuery extends IPagination,IListSort,IListCondition{

}