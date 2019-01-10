const router                  = require('express').Router();
const {subscriptionPlanController}  = require('../controller');
const hof                     = require('./hof');
const 
    {
        queryFilterParser,
        querySortParser,
        querySearchParser
    }                     = require('../middleware');

// middleware


// routes

router.get('/',[queryFilterParser(),querySortParser()],hof(subscriptionPlanController.getList,(req)=>[req]));
router.get('/search/',[queryFilterParser(),querySortParser(),querySearchParser()],hof(subscriptionPlanController.getSearchList,(req)=>[req]));
router.get('/:id',hof(subscriptionPlanController.getById,(req)=>[req]))

module.exports = router;