const router                  = require('express').Router();
const {orderController}     = require('../controller');
const hof                     = require('./hof');
const 
    {
        queryFilterParser,
        querySortParser,
        querySearchParser
    }                     = require('../middleware');

// middleware


// routes
router.get('/',[queryFilterParser(),querySortParser()],hof(orderController.getList,(req)=>[req]));
router.post('/',hof(orderController.create,(req)=>[req]));
router.get('/search/',[queryFilterParser(),querySortParser(),querySearchParser()],hof(orderController.getSearchList,(req)=>[req]));
router.get('/:id',hof(orderController.getById,(req)=>[req]))

module.exports = router;