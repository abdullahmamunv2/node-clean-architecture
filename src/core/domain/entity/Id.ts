
export class ID<T> {
    private id : T;
    constructor(id : T){
        this.id = id;
    }
    get Value():T{
        return this.id;
    }
}