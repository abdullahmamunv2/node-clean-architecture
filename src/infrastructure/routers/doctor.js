const router              = require('express').Router();
const {doctorController}  = require('../controller');
const hof                 = require('./hof');
const 
    {
        queryFilterParser,
        querySortParser,
        querySearchParser,
        authorization
    }                     = require('../middleware');

// middleware


// routes
router.get('/autocomplete/',queryFilterParser(),hof(doctorController.getAutoCompleteList,(req)=>[req]));
router.get('/',[authorization(),queryFilterParser(),querySortParser()],hof(doctorController.getList,(req)=>[req]));
router.get('/search/',[queryFilterParser(),querySortParser(),querySearchParser()],hof(doctorController.getSearchList,(req)=>[req]));
router.get('/:id',hof(doctorController.getById,(req)=>[req]))

module.exports = router;