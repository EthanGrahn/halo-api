const Metadata = require('./metadata.js')
const Stats = require('./stats.js')

function HW2 (API_KEY) {
  HW2.prototype.metadata = new Metadata(API_KEY)
  HW2.prototype.stats = new Stats(API_KEY)
}

module.exports = HW2
