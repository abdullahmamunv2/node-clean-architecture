
export class SortItem<T extends number | string>{
    key : string = "";
    value! : T ;

    constructor(key:string , value : T){
        this.key   = key;
        this.value = value;
    }

    get Key():string{
        return this.key;
    }
    get Value() : T{
        return this.value;
    }
}

