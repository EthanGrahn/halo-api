var httpWrapper = require("../httpWrapper.js");

function metadata(API_KEY){
  this._http = new httpWrapper(API_KEY);
}

metadata.prototype.campaignMissions = function(){
  return this._http.queryAPI('/metadata/h5/metadata/campaign-missions');
}

metadata.prototype.commendations = function(){
  return this._http.queryAPI('/metadata/h5/metadata/commendations');
}

metadata.prototype.csrDesignations = function(){
  return this._http.queryAPI('/metadata/h5/metadata/csr-designations');
}

metadata.prototype.enemies = function(){
  return this._http.queryAPI('/metadata/h5/metadata/enemies');
}

metadata.prototype.flexibleStats = function(){
  return this._http.queryAPI('/metadata/h5/metadata/flexible-stats');
}

metadata.prototype.gameBaseVariants = function(){
  return this._http.queryAPI('/metadata/h5/metadata/game-base-variants');
}

metadata.prototype.gameVariants = function(id){
  return this._http.queryAPI('/metadata/h5/metadata/game-variants/' + id);
}

metadata.prototype.impulses = function(){
  return this._http.queryAPI('/metadata/h5/metadata/impulses');
}

metadata.prototype.mapVariant = function(id){
  return this._http.queryAPI('/metadata/h5/metadata/map-variants/' + id);
}

metadata.prototype.maps = function(){
  return this._http.queryAPI('/metadata/h5/metadata/maps');
}

metadata.prototype.medals = function(){
  return this._http.queryAPI('/metadata/h5/metadata/medals');
}

metadata.prototype.playlists = function(){
  return this._http.queryAPI('/metadata/h5/metadata/playlists');
}

metadata.prototype.requisition = function(id){
  return this._http.queryAPI('/metadata/h5/metadata/requisitions/' + id);
}

metadata.prototype.requisitionPack = function(id){
  return this._http.queryAPI('/metadata/h5/metadata/requisition-packs/' + id);
}

metadata.prototype.seasons = function(){
  return this._http.queryAPI('/metadata/h5/metadata/seasons');
}

metadata.prototype.skulls = function(){
  return this._http.queryAPI('/metadata/h5/metadata/skulls');
}

metadata.prototype.spartanRanks = function(){
  return this._http.queryAPI('/metadata/h5/metadata/spartan-ranks');
}

metadata.prototype.teamColors = function(){
  return this._http.queryAPI('/metadata/h5/metadata/team-colors');
}

metadata.prototype.vehicles = function(){
  return this._http.queryAPI('/metadata/h5/metadata/vehicles');
}

metadata.prototype.weapons = function(){
  return this._http.queryAPI('/metadata/h5/metadata/weapons');
}

module.exports = metadata;
