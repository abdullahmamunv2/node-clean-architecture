import invalidHttpMethod  from  './invalid.method';
import addressRouter  from './address.router';
import {Application}     from 'express';


export default function(app : Application) : void{
    app.use('/address',addressRouter);
    app.all('/*',invalidHttpMethod);
}
