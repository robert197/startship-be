const mongoose = require('mongoose')
const Schema = mongoose.Schema

const team = new Schema({
  name: {type: String},
  position: {type: String},
  age: {type: Number}
})

const startupSchema = new Schema({
  name: {type: String},
  link: {type: String},
  logo: {type: String},
  description: {type: String},
  team: [team],
  dataHost: {type: Boolean},
  technology: {type: String},
  sector: {type: String},
  age: {type: Number},
  country: {type: String},
  city: {type: String},
  solution: {type: String},
  category: {type: String},
  patents: {type: String},
  partnerships: {type: Number},
  pocs: {type: Number},
  fundingRound: {type: String}
})

module.exports = startupSchema
