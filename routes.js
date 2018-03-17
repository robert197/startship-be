const Router = require('express').Router
const router = new Router()

const startup = require('./model/startup/router')
const corporation = require('./model/corporation/router')
const crawler = require('./model/crawler/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to startship-be API!' })
})

router.use('/startup', startup)
router.use('/corporation', corporation)
router.use('/crawler', crawler)

module.exports = router
