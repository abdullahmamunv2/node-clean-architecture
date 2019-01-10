const router                   = require('express').Router();
const {categoryController}     = require('../controller');
const hof                      = require('./hof');
const 
    {
        queryFilterParser,
        querySortParser,
        querySearchParser
    }                     = require('../middleware');

// middleware


// routes
router.get('/',[queryFilterParser(),querySortParser()],hof(categoryController.getList,(req)=>[req]));
router.get('/:id(\\d+)',hof(categoryController.getById,(req)=>[req]))

module.exports = router;