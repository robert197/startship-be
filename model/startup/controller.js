const Controller = require('../../lib/controller')
const startupFacade = require('./facade')

class StartupController extends Controller {
   findAndSearch(req, res, next) {
      if (!req.query.search) {
         return this.facade.find(req.query)
         .then(collection => res.status(200).json(collection))
         .catch(err => next(err))
         .then(startups => res.send(startups))
      } else {
         const searchQuery = new RegExp('^.*'+req.query.search+'.*$', 'i')
         this.findByDescription(searchQuery)
         .then(collection => {
            if (collection.length > 0) {
               res.status(200).json(collection)
            } else {
               this.findByName(searchQuery)
               .then(collection => res.status(200).json(collection))
            }
         })
      }
   }

   findByDescription(searchQuery) {
      return this.facade.find({description: searchQuery})
      .catch(err => next(err))
   }

   findByName(searchQuery) {
      return this.facade.find({name: searchQuery})
      .catch(err => next(err))
   }
}

module.exports = new StartupController(startupFacade)
