const Controller = require('../../lib/controller')
const corporationFacade = require('./facade')

class CorporationController extends Controller {}

module.exports = new CorporationController(corporationFacade)
