require('module-alias/register');
process.env["NODE_CONFIG_DIR"] = __dirname+'/../../config'
let config    = require('config');
import {client} from '@db/mongo';
import { Error } from 'mongoose';
import app from '@infrastructure/app'

let dbConfig     = config.get('mongodb');
let serverConfig = config.get('server');
let server : any ;





client.initConnection(dbConfig.uri,dbConfig.options).then(()=>{
    
    server = app.listen(serverConfig.port,serverConfig.host,()=>{
        console.log('server started.......');
    })

}).catch((error : Error)=>{
    console.log(error);
})