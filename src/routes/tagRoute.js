const tagRoute = require('express').Router();

tagRoute.get('/tagAll',(req,res) => {
    res.send('this is a tag')
})

module.exports = tagRoute;