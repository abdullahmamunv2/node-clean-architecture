import {BaseAddress} from '@core/domain/entity';


export default interface IReadAddressGateWay {
    get(id : number | string) : Promise<BaseAddress>
}
