import { 
    ISorts,
    SortItem,
    IPagination,
    IConditions,
    Condition,
    IQuery
} from "./";


export class Query implements IQuery{

    
    page: number=1;
    limit: number=100;
    conditions: Condition<string | number>[]=[];
    orders: SortItem<string | number>[]=[];
}