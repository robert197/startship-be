const Controller = require('../../lib/controller')
const startupFacade = require('./facade')

class StartupController extends Controller {}

module.exports = new StartupController(startupFacade)
