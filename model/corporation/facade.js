const Facade = require('../../lib/facade')
const corporationSchema = require('./schema')

class CorporationFacade extends Facade {}

module.exports = new CorporationFacade('Corporation', corporationSchema)
