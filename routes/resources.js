const express = require('express');
const router = express.Router();
const resourcesCtrl = require('../controllers/resources');
const Resource = require('../models/resource')

router.post('/post', resourcesCtrl.create);
router.get('/', resourcesCtrl.resources)
router.delete('/:id',isLoggedIn, resourcesCtrl.delete)

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next()
    res.redirect('/uhoh')
}

module.exports = router;