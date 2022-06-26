const User = require('../models/user')

module.exports = {
    index,
    about,
    contact
}


function index(req, res, next){
    res.render('index')
}

function about(req,res){
    res.render('about')
}

function contact(req,res){
    res.render('contact')
}