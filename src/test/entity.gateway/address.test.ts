require('module-alias/register');
import {expect,use} from 'chai'
import chaiAsPromised from 'chai-as-promised';
use(chaiAsPromised);
import {describe,it} from 'mocha'


/*import {IOContainer,I, E}  from  '@ioc'
import {CORE_TYPE}         from '@core/types'
import {
    Entity} from '@core/domain'
import { UrbanAddress,RuralAddress } from '@core/domain/entity';
import { EntityGatewayErrorResponse } from '@core/domain/entity.gateway';

let addressGateway =IOContainer.get<I.IReadAddressGateWay>(CORE_TYPE.ReadAddressGateway);


describe('Address Entity Gateway',()=>{
    describe('Read Address from Entity Gateway',()=>{
        it('get() should return an urban address of type UrbanAddress', (done)=>{
            let id = '5c6f217412d1a4283ccd5e00';
            addressGateway.get(id).then((address : Entity.BaseAddress)=>{
                expect(address).to.instanceOf(UrbanAddress).and.have.property('type','urban');
                done();
            }).catch((err)=>{
                done(err);
            })
            
        })

        it('get() should return an rural address of type RuralAddress', (done)=>{
            let id = '5c6f217412d1a4283ccd5e01';
            addressGateway.get(id).then((address : Entity.BaseAddress)=>{
                expect(address).to.instanceOf(RuralAddress).and.have.property('type','rural');
                done();
            }).catch((err)=>{
                done(err);
            })
            
        })
    
        it('get() should return 404 not found error', (done)=>{
            let id = '5c6f217412d1a4283ccd5e02';
            addressGateway.get(id).then(()=>{}).catch((error)=>{
                expect(error.errorResponse.type).to.equal("NO_DATA_FOUND");
                done();
            })
            
        })
    });
    
})

*/