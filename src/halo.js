var hw2 = require("./hw2/hw2.js");
var h5 = require("./h5/h5.js");

function halo(API_KEY){
  halo.prototype.hw2 = new hw2(API_KEY);
  halo.prototype.h5 = new h5(API_KEY);
}

module.exports = halo;
