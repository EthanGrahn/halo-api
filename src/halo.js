var metadata = require("./metadata.js");
var stats = require("./stats.js");

function halo(API_KEY){
  halo.prototype.metadata = new metadata(API_KEY);
  halo.prototype.stats = new stats(API_KEY);
}

module.exports = halo;
