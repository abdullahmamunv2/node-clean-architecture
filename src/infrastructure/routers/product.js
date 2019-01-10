const router                  = require('express').Router();
const {productController}     = require('../controller');
const hof                     = require('./hof');
const 
    {
        queryFilterParser,
        querySortParser,
        querySearchParser
    }                     = require('../middleware');

// middleware


// routes
router.get('/autocomplete/',queryFilterParser(),hof(productController.getAutoCompleteList,(req)=>[req]));
router.get('/',[queryFilterParser(),querySortParser()],hof(productController.getList,(req)=>[req]));
router.get('/search/',[queryFilterParser(),querySortParser(),querySearchParser()],hof(productController.getSearchList,(req)=>[req]));
router.get('/:id(\\d+)',hof(productController.getById,(req)=>[req]))



module.exports = router;