import { 
    ISorts,
    SortItem,
    IPagination,
    IConditions,
    Condition
} from "./";

export interface IQuery extends IPagination,ISorts,IConditions{

}