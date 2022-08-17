const {getMatches,getLeagueMatches} = require('./controllers')

const router =require('express').Router()

router.get('/getMatches',getMatches)
router.get('/getLeagueMatches/:name',getLeagueMatches)

module.exports=router


