const {getMatches} = require('./controllers')

const router =require('express').Router()

router.get('/getMatches',getMatches)

module.exports=router


