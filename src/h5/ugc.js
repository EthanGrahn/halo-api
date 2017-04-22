var httpWrapper = require("../httpWrapper.js");

function ugc(API_KEY){
  this._http = new httpWrapper(API_KEY);
}

ugc.prototype.playerGameVariant = function(player, variant){
  return this._http.queryAPI('/ugc/h5/players/' + player + '/gamevariants/' + variant);
}

ugc.prototype.playerGameVariants = function(player, start = 0, count = 25, sort = 'modified', order = 'desc'){
  return this._http.queryAPI('/ugc/h5/players/' + player + '/gamevariants?start=' + start + '&count=' + count + '&sort=' + sort + '&order=' + order);
}

ugc.prototype.playerMapVariant = function(player, variant){
  return this._http.queryAPI('/ugc/h5/players/' + player + '/mapvariants/' + variant);
}

ugc.prototype.playerMapVariants = function(player, start = 0, count = 25, sort = 'modified', order = 'desc'){
  return this._http.queryAPI('/ugc/h5/players/' + player + '/mapvariants?start=' + start + '&count=' + count + '&sort=' + sort + '&order=' + order);
}

module.exports = ugc;
