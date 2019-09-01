import IServer from './IServer'
import {Server,ClientRequestArgs,createServer, RequestListener} from 'http';
import { EventEmitter } from 'events';
import ServerError from './ServerError'

export default class HttpServer extends EventEmitter implements IServer{

    private server : Server|null=null;
    private host : string;
    private port : number;
    private requestListener : RequestListener;
    private options : ClientRequestArgs = {
        protocol : 'http',
        timeout  : 6*1000
    };
    constructor(host : string,port:number,requestListener:RequestListener,options:ClientRequestArgs){
        super();
        this.host = host;
        this.port = port;
        this.requestListener = requestListener;
        if(options)
            this.options = options;
    }
    private _create():void{
        this.server = createServer(this.requestListener);
    }
    private _listen() : Promise<boolean | Error>{
        return new Promise((resolve,reject)=>{
            if(this.server === null){
                let error = new ServerError('Server is not created.','ERR_SERVER_UNINITIALIZED');
                reject(error);
            }
            else{
                this.server.listen(this.port,this.host,()=>{
                    resolve(true);
                })

                this.server.on('error',(error)=>{
                    this.emit('error',error);
                })

            }


            
        })
        
    }

    start(): Promise<boolean | Error> {
        if(!this.server){
            this._create();
        }
        return this._listen();
    }
    stop(): Promise<boolean | Error> {
        return new Promise((resolve,reject)=>{
            if(this.server === null){
                let error = new ServerError('Server  not created.','ERR_SERVER_UNINITIALIZED');
                reject(error);
            }
            else{
                this.server.close((err:Error|undefined)=>{
                    if(err){
                        let error = new ServerError(err.message,'ERR_UNABLE_TO_STOP');
                        reject(err);
                    }
                    else{
                        resolve(true);
                    }
                })
            }
        });
        
    }
    restart(): Promise<boolean> {
        return new Promise((resolve,reject)=>{
            if(this.server === null){
                let error = new ServerError('Server is not created.','ERR_SERVER_UNINITIALIZED');
                reject(error);
            }
            else{
                return this.stop().then(()=>{
                    return this.start();
                })
            }
        });
    }

}