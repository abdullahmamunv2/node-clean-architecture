import IMongoRepository from "../IMongoRepository";
import { Entity } from "@core/domain";
import { IQuery } from "@core/domain";


export default class AddressRepository implements IMongoRepository<Entity.BaseAddress>{
    readAll(query: IQuery): Entity.BaseAddress[] {
        throw new Error("Method not implemented.");
    }    
    read(id: string): Entity.BaseAddress {
        throw new Error("Method not implemented.");
    }
    create(entity: Entity.BaseAddress): Entity.BaseAddress {
        throw new Error("Method not implemented.");
    }
    update(entity: Entity.BaseAddress): Entity.BaseAddress {
        throw new Error("Method not implemented.");
    }
    delete(entity: Entity.BaseAddress): Entity.BaseAddress {
        throw new Error("Method not implemented.");
    }



}