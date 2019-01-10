const router                  = require('express').Router();
const {subscriptionController}  = require('../controller');
const hof                     = require('./hof');
const 
    {
        queryFilterParser,
        querySortParser,
        querySearchParser
    }      
                   = require('../middleware');

const {HEADER}          = require('../constants')
const MSISDN_HEADER     = require('../middleware').msisdn_header(HEADER.MSISDN);

// middleware


// routes
router.post('/start',MSISDN_HEADER,hof(subscriptionController.start,(req,res)=>[req,res]));
router.get('/',[queryFilterParser(),querySortParser()],hof(subscriptionController.getList,(req)=>[req]));
router.get('/search/',[queryFilterParser(),querySortParser(),querySearchParser()],hof(subscriptionController.getSearchList,(req)=>[req]));
router.get('/:id(\\d+)',hof(subscriptionController.getById,(req)=>[req]))

module.exports = router;