require('module-alias/register');
let config    = require('config');
import {
    HttpServer,
    ServerError,
    IServer
}  from '@infrastructure'

import {client} from '@infrastructure';
import { Error } from 'mongoose';
import {App} from '@infrastructure'



var fs = require('fs');
const path = require("path");

let dbConfig     = config.get('mongodb');
let serverConfig = config.get('server');

let server : IServer = new HttpServer(serverConfig.host,serverConfig.port.http,App);

/*client.initConnection(dbConfig.uri,dbConfig.options).then(()=>{
    return server.start();
})*/
server.start().
then(()=>{
    console.log('server started............');
}).
catch((error : Error)=>{
    console.log(error);
})

