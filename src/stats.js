var https = require("https");

var options = {
  host: 'www.haloapi.com' ,
  path: '',
  method: 'GET',
  headers: {"Ocp-Apim-Subscription-Key": ""}
};

function stats(API_KEY){
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

stats.prototype.matchEvents = function(matchID){
  return queryAPI('/stats/hw2/matches/' + matchID + '/events');
}

stats.prototype.matchResult = function(matchID){
  return queryAPI('/stats/hw2/matches/' + matchID);
}

stats.prototype.playerCampaignProgress = function(player){
  return queryAPI('/stats/hw2/players/' + player + '/campaign-progress');
}

stats.prototype.playerMatchHistory = function(player, matchType = '', start = 0, count = 25){
  return queryAPI('/stats/hw2/players/' + player + '/matches?matchType=' + matchType + '&start=' + start + '&count=' + count);
}

stats.prototype.playerPlaylistRatings = function(playlistID, players){
  return queryAPI('/stats/hw2/playlist/' + playlistID +'/rating?players=' + players);
}

stats.prototype.playerSeasonStatsSummary = function(player, seasonID){
  return queryAPI('/stats/hw2/players/' + player + '/stats/seasons/' + seasonID);
}

stats.prototype.playerStatsSummary = function(player){
  return queryAPI('/stats/hw2/players/' + player + '/stats');
}

stats.prototype.playerXPs = function(player){
  return queryAPI('/stats/hw2/xp?players=' + player);
}

module.exports = stats;
