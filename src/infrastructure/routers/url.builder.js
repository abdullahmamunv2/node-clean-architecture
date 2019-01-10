const invalidHttpMethod = require('./invalid.method');
const doctorRounter    = require('./doctor');
const tipsRouter       = require('./tips');
const chamberRouter    = require('./chamber');
const specialityRouter = require('./speciality');
const authRouter       = require('./auth');
const productRouter    = require('./product');
const orderRouter      = require('./order');
const insuranceRouter  = require('./insurance');
const categoryRouter   = require('./category');
const subscriptionRouter = require('./subscription');
const subscriptionPlanRouter = require('./subscription.plan');


const builder = (app)=>{
    app.use('/:version/suggestions/',authRouter);
    app.use('/:version/doctors',doctorRounter);
    app.use('/:version/tips',tipsRouter);
    app.use('/:version/chambers',chamberRouter);
    app.use('/:version/specialities',specialityRouter);
    app.use('/:version/auth',authRouter);
    app.use('/:version/products/categories',categoryRouter);
    app.use('/:version/products',productRouter);
    app.use('/:version/orders',orderRouter);
    app.use('/:version/insurances',insuranceRouter);
    app.use('/:version/subscriptions/plans',subscriptionPlanRouter);
    app.use('/:version/subscriptions/',subscriptionRouter);

    app.all('/*',invalidHttpMethod);
}

module.exports = builder;