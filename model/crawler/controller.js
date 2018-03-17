const Controller = require('../../lib/controller')
const crawlerFacade = require('./facade')

class CrawlerController {
   
   crawlSite(req, res, next) {
      res.status(200).json(req.params)
   }
}

module.exports = new CrawlerController()
