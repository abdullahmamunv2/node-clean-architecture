require('module-alias/register');
import { AddressReadPresenter} from "@adapter/presenter/address"
import { AddressReadMapper} from "@infrastructure/mapper/response/address"
import {AddressController}  from "@adapter/controller"
import {AddressGateway}   from '@entity.gateway/mongo'


let presenter = new AddressReadPresenter();
let mapper =  new AddressReadMapper();
let addressGateway   = new AddressGateway();
let controller = new AddressController(addressGateway,presenter,mapper);
import {client} from '@db/mongo';

import { Error } from 'mongoose';


let config = {
    "uri"     : "mongodb://127.0.0.1:27017/find-my-address",
    "options" : {
        "useNewUrlParser"   : true,
        "bufferCommands"    : true,
        "autoIndex"         : true,
        "dbName"            : "find-my-address",
        "autoReconnect"     : true,
        "reconnectInterval" : 2000,
        "poolSize"          : 10,
        "socketTimeoutMS"   : 15000
    } 
}


client.initConnection(config.uri,config.options).then(()=>{
    
    controller.get({params : {id:'5c6f217412d1a4283ccd5e58'}},null).then(()=>{

    }).catch((err)=>{
        console.log(err);
    })

}).catch((error : Error)=>{
    console.log(error);
})



console.log('start');







