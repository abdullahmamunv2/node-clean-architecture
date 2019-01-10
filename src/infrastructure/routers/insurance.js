const router                  = require('express').Router();
const {insuranceController}   = require('../controller');
const hof                     = require('./hof');
const 
    {
        queryFilterParser,
        querySortParser,
        querySearchParser
    }                     = require('../middleware');

// middleware


// routes
router.get('/:id',hof(insuranceController.getById,(req)=>[req]))

module.exports = router;