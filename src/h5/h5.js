var metadata = require("./metadata.js");
var stats = require("./stats.js");
var profile = require("./profile.js");
var ugc = require("./ugc.js");

function h5(API_KEY){
  h5.prototype.metadata = new metadata(API_KEY);
  h5.prototype.stats = new stats(API_KEY);
  h5.prototype.ugc = new ugc(API_KEY);
  h5.prototype.profile = new profile(API_KEY);
}

module.exports = h5;
