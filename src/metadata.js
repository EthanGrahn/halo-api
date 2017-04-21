var httpWrapper = require("./httpWrapper.js");

function metadata(API_KEY){
  this._http = new httpWrapper(API_KEY);
}

metadata.prototype.campaignLevels = function(){
  return this._http.queryAPI('/metadata/hw2/campaign-levels');
}

metadata.prototype.campaignLogs = function(){
  return this._http.queryAPI('/metadata/hw2/campaign-logs');
}

metadata.prototype.cardKeywords = function(){
  return this._http.queryAPI('/metadata/hw2/card-keywords');
}

metadata.prototype.cards = function(){
  return this._http.queryAPI('/metadata/hw2/cards');
}

metadata.prototype.csrDesignations = function(){
  return this._http.queryAPI('/metadata/hw2/csr-designations');
}

metadata.prototype.difficulties = function(){
  return this._http.queryAPI('/metadata/hw2/difficulties');
}

metadata.prototype.gameObjectCategories = function(){
  return this._http.queryAPI('/metadata/hw2/game-object-categories');
}

metadata.prototype.gameObjects = function(){
  return this._http.queryAPI('/metadata/hw2/game-objects');
}

metadata.prototype.leaderPowers = function(){
  return this._http.queryAPI('/metadata/hw2/leader-powers');
}

metadata.prototype.leaders = function(){
  return this._http.queryAPI('/metadata/hw2/leaders');
}

metadata.prototype.maps = function(){
  return this._http.queryAPI('/metadata/hw2/maps');
}

metadata.prototype.packs = function(){
  return this._http.queryAPI('/metadata/hw2/packs');
}

metadata.prototype.playlists = function (){
  return this._http.queryAPI('/metadata/hw2/playlists');
}

metadata.prototype.seasons = function (){
  return this._http.queryAPI('/metadata/hw2/seasons');
}

metadata.prototype.spartanRanks = function (){
  return this._http.queryAPI('/metadata/hw2/spartan-ranks');
}

metadata.prototype.techs = function (){
  return this._http.queryAPI('/metadata/hw2/techs');
}

module.exports = metadata;
