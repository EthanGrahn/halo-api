var https = require("https");

var options = {
  host: 'www.haloapi.com' ,
  path: '',
  method: 'GET',
  headers: {"Ocp-Apim-Subscription-Key": ""}
};

function metadata(API_KEY){
  options.headers["Ocp-Apim-Subscription-Key"] = API_KEY;
}

function queryAPI(path){
  return new Promise((resolve, reject) => {
    let _options = options;
    _options.path = path;
    let responseText = '';
    let request = https.request(_options, (response) => {
      response.on('data', (data) => {
        responseText += data;
      });
      response.on('end', () => {
        resolve(JSON.parse(responseText));
      })
    });
    request.on('error', (e) => {reject(e)});
    request.end();
  });
}

metadata.prototype.campaignLevels = function(){
  return queryAPI('/metadata/hw2/campaign-levels');
}

metadata.prototype.campaignLogs = function(){
  return queryAPI('/metadata/hw2/campaign-logs');
}

metadata.prototype.cardKeywords = function(){
  return queryAPI('/metadata/hw2/card-keywords');
}

metadata.prototype.cards = function(){
  return queryAPI('/metadata/hw2/cards');
}

metadata.prototype.csrDesignations = function(){
  return queryAPI('/metadata/hw2/csr-designations');
}

metadata.prototype.difficulties = function(){
  return queryAPI('/metadata/hw2/difficulties');
}

metadata.prototype.gameObjectCategories = function(){
  return queryAPI('/metadata/hw2/game-object-categories');
}

metadata.prototype.gameObjects = function(){
  return queryAPI('/metadata/hw2/game-objects');
}

metadata.prototype.leaderPowers = function(){
  return queryAPI('/metadata/hw2/leader-powers');
}

metadata.prototype.leaders = function(){
  return queryAPI('/metadata/hw2/leaders');
}

metadata.prototype.maps = function(){
  return queryAPI('/metadata/hw2/maps');
}

metadata.prototype.packs = function(){
  return queryAPI('/metadata/hw2/packs');
}

metadata.prototype.playlists = function (){
  return queryAPI('/metadata/hw2/playlists');
}

metadata.prototype.seasons = function (){
  return queryAPI('/metadata/hw2/seasons');
}

metadata.prototype.spartanRanks = function (){
  return queryAPI('/metadata/hw2/spartan-ranks');
}

metadata.prototype.techs = function (){
  return queryAPI('/metadata/hw2/techs');
}

module.exports = metadata;
