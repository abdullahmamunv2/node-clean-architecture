require('module-alias/register');
import HttpServer  from '@server/http'
import ServerError from '@server/ServerError'
import IServer from '@server/IServer'
let config    = require('config');
import {client} from '@db/mongo';
import { Error } from 'mongoose';
import app from '@infrastructure/app'

var fs = require('fs');
const path = require("path");

let dbConfig     = config.get('mongodb');
let serverConfig = config.get('server');

let server : IServer = new HttpServer(serverConfig.host,serverConfig.port.http,app);

/*client.initConnection(dbConfig.uri,dbConfig.options).then(()=>{
    return server.start();
})*/
server.start().
then(()=>{
    console.log('server started.');
}).
catch((error : Error)=>{
    console.log(error);
})

