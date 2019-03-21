require('module-alias/register');
process.env["NODE_CONFIG_DIR"] = __dirname+'/../../config'
let config    = require('config');
import {client} from '@db/mongo';
import { Error } from 'mongoose';
import app from '@infrastructure/app'

var fs = require('fs');
const path = require("path");

import * as HTTP from 'http';
import * as HTTPS from 'https'

let dbConfig     = config.get('mongodb');
let serverConfig = config.get('server');
let SecureServer   : HTTPS.Server ;
let InsecureServer : HTTP.Server;
let serverProtocol : string | undefined = process.env.SERVER_PROTOCOL;
if(serverProtocol === undefined)
    serverProtocol = "http";

//if(serverProtocol.)


client.initConnection(dbConfig.uri,dbConfig.options).then(()=>{
    bootServer(false);
    //console.log(server);

}).catch((error : Error)=>{
    console.log(error);
})

const bootServer = (isSecure=false)=>{
    if(isSecure){
        SecureServer = HTTPS.createServer({
            key: fs.readFileSync(path.resolve(__dirname, './cert/server.key')),
            cert: fs.readFileSync(path.resolve(__dirname, './cert/server.cert'))
          }, app)
          .listen(serverConfig.port,serverConfig.host,()=>{
            console.log('server started.......');
        })
    }
    else{
        InsecureServer = HTTP.createServer(app)
        .listen(serverConfig.port,serverConfig.host,()=>{
            console.log('server started.......');
        })
    }
}


const __Main__ = ()=>{

}