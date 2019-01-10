const router                  = require('express').Router();
const {specialityController}  = require('../controller');
const hof                     = require('./hof');
const 
    {
        queryFilterParser,
        querySortParser,
        querySearchParser
    }                     = require('../middleware');

// middleware


// routes

router.get('/',[queryFilterParser(),querySortParser()],hof(specialityController.getList,(req)=>[req]));
router.get('/search/',[queryFilterParser(),querySortParser(),querySearchParser()],hof(specialityController.getSearchList,(req)=>[req]));
router.get('/:id',hof(specialityController.getById,(req)=>[req]))

module.exports = router;