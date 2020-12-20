const HW2 = require('./hw2/hw2.js')
const H5 = require('./h5/h5.js')

function halo (API_KEY) {
  halo.prototype.hw2 = new HW2(API_KEY)
  halo.prototype.h5 = new H5(API_KEY)
}

module.exports = halo
