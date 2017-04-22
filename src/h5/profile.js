var httpWrapper = require("../httpWrapper.js");

function profile(API_KEY){
  this._http = new httpWrapper(API_KEY);
}

profile.prototype.emblemImage = function(player, size = 256){
  return this._http.queryAPI('/profile/h5/profiles/' + player + '/emblem?size=' + size);
}

profile.prototype.spartanImage = function(player, size = 256, crop = 'full'){
  return this._http.queryAPI('/profile/h5/profiles/' + player + '/spartan?size=' + size + 'crop=' + crop);
}

module.exports = profile;
