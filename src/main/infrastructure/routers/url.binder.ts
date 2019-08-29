import invalidHttpMethod  from  './invalid.method';
import {Application}     from 'express';


export default function(app : Application) : void{
    app.all('/*',invalidHttpMethod);
}
