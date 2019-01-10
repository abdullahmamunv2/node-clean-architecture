
const config        = require('config');
const log4js        = require('log4js');
const log4jsConfig  = require('./log4js.json');
const {
        App,
        DbManager
    }           = require('./src');


log4js.configure(log4jsConfig);

let ServerLogger          = log4js.getLogger('server');
let DatabaseLogger        = log4js.getLogger('database');
let ApplicationLogger     = log4js.getLogger('application');



const gracefullStart = ()=>{
    DbManager.mssqldb.initConnection().then(()=>{
        DatabaseLogger.info('MSSQL Database pool created.')
        return DbManager.mongodb.initConnection();
    })
    .then(()=>{
        DatabaseLogger.info('Mongo Database pool created.')
        return true;
    })
    .then(()=>{
        // boot server.
        App.listen(config.server.port,config.server.host,()=>{
            ServerLogger.info(`Application started. Host : ${config.server.host} Port : ${config.server.port}`)
            if(process.env.NODE_IS_PM2){
                //gracefull start
                process.send('ready');
                ServerLogger.info(`[CLUSTER MODE] gracefull start  : true`);
            }
        })
    
    }).
    catch((err)=>{
        DatabaseLogger.error(err);
        console.log(err);
    })
}


const gracefullShutDown = ()=>{
    ServerLogger.error('Gracefull Shutting down........ ');
    DbManager.clean().then(()=>{
        ServerLogger.error('Database Connection Gracefully closed');
        App.close((err)=>{
            if(err){
                ServerLogger.error('Application Connection Forcefully closed : ' + err);
                process.exit(1);
            }
            process.exit(0);

        })
    }).catch((err)=>{
        ServerLogger.error('Database Connection Forcefully closed : ' + err);
        App.close((err)=>{
            if(err){
                ServerLogger.error('Application Connection Forcefully closed : ' + err);
                process.exit(1);
            }
            process.exit(0);

        })
    })
}

const configProcess = ()=>{
    process.on('unhandledRejection', (reason, promise) => {
        ApplicationLogger.error('Unhandled Rejection at:', reason.stack || reason)
    })
    
    
    if(process.env.NODE_IS_PM2){
        //gracefull stop
        process.on('SIGINT', function() {
            console.log('SIGINT');
            ServerLogger.info('Shut down signal -> SIGNIT');
            gracefullShutDown();
        });
        process.on('message', function(msg) {
            console.log(msg);
            if (msg == 'shutdown'){
                ServerLogger.info('Shut down signal -> shutdown');
                gracefullShutDown();
                    
            }
        });
    }
}



const __Main__  = ()=>{
    configProcess();
    gracefullStart();
}

__Main__();






