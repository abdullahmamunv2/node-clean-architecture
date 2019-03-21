import express, { Application }  from 'express';
import morgan   from 'morgan';
import {UrlBinder}  from './routers';



const app : Application           = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));


UrlBinder(app);

export default app;






