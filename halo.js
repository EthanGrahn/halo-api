var metadata = require("./metadata.js");
function halo(API_KEY){
  halo.prototype.metadata = new metadata(API_KEY);
}

module.exports = halo;
