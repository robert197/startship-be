const Facade = require('../../lib/facade')
const startupSchema = require('./schema')

class StartupFacade extends Facade {}

module.exports = new StartupFacade('Startup', startupSchema)
