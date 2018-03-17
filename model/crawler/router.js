const controller = require('./controller')
const Router = require('express').Router
const router = new Router()

router.route('/:site')
  .get((...args) => controller.crawlSite(...args))

module.exports = router
