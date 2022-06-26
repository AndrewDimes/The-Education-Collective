const User = require('../models/user')
const Resource = require('../models/resource')

module.exports = {
    create,
    resources,
    delete: deleteResource
   
}

function deleteResource(req,res){
    console.log("test")
    Resource.findByIdAndRemove(req.params.id, function(err){
        res.redirect('/resources')
    })
}

function resources(req,res){
    let avatars = []
    Resource.find({}, function(err, resources){
            if(req.user){
                const userEmail = req.user.email
                const userId = req.user._id
                const userName = req.user.name
                res.render('resources', {resources, userEmail, userId, userName})
            } else {
                res.render('resources', {resources})
            }
    })  
}

function create(req, res){
    req.body.link = req.body.link.replace("http://","")
    req.body.link = req.body.link.replace("https://","")
    const newResource = new Resource(req.body)
    console.log(req.body.link)
    User.resource = newResource._id
    newResource.user = req.user._id
    newResource.name = req.user.name
    newResource.avatar = req.user.avatar
    newResource.save(function(err){
        res.redirect('/resources')
    })
}