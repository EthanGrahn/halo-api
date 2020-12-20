const Metadata = require('./metadata.js')
const Stats = require('./stats.js')
const Profile = require('./profile.js')
const UGC = require('./ugc.js')

function H5 (API_KEY) {
  H5.prototype.metadata = new Metadata(API_KEY)
  H5.prototype.stats = new Stats(API_KEY)
  H5.prototype.ugc = new UGC(API_KEY)
  H5.prototype.profile = new Profile(API_KEY)
}

module.exports = H5
