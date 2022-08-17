const {getMatches,getLeagueMatches} = require('./controllers')

const router =require('express').Router()

router.get('/getMatches',getMatches)
router.get('/getLeagueMatches',getLeagueMatches)

module.exports=router


