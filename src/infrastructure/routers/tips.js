const router              = require('express').Router();
const {tipsController}  = require('../controller');
const hof                 = require('./hof');
const 
    {
        queryFilterParser,
        querySortParser,
        querySearchParser
    }                     = require('../middleware');

// middleware


// routes

router.get('/',[queryFilterParser(),querySortParser()],hof(tipsController.getList,(req)=>[req]));
router.get('/search/',[queryFilterParser(),querySortParser(),querySearchParser()],hof(tipsController.getSearchList,(req)=>[req]));
router.get('/:id',hof(tipsController.getById,(req)=>[req]))

module.exports = router;