var metadata = require("./metadata.js");
var stats = require("./stats.js");

function hw2(API_KEY){
  hw2.prototype.metadata = new metadata(API_KEY);
  hw2.prototype.stats = new stats(API_KEY);
}

module.exports = hw2;
