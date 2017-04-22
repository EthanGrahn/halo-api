var httpWrapper = require("../httpWrapper.js");

function stats(API_KEY){
  this._http = new httpWrapper(API_KEY);
}

stats.prototype.matchEvents = function(matchID){
  return this._http.queryAPI('/stats/hw2/matches/' + matchID + '/events');
}

stats.prototype.matchResult = function(matchID){
  return this._http.queryAPI('/stats/hw2/matches/' + matchID);
}

stats.prototype.playerCampaignProgress = function(player){
  return this._http.queryAPI('/stats/hw2/players/' + player + '/campaign-progress');
}

stats.prototype.playerMatchHistory = function(player, matchType = '', start = 0, count = 25){
  return this._http.queryAPI('/stats/hw2/players/' + player + '/matches?matchType=' + matchType + '&start=' + start + '&count=' + count);
}

stats.prototype.playerPlaylistRatings = function(playlistID, players){
  return this._http.queryAPI('/stats/hw2/playlist/' + playlistID +'/rating?players=' + players);
}

stats.prototype.playerSeasonStatsSummary = function(player, seasonID){
  return this._http.queryAPI('/stats/hw2/players/' + player + '/stats/seasons/' + seasonID);
}

stats.prototype.playerStatsSummary = function(player){
  return this._http.queryAPI('/stats/hw2/players/' + player + '/stats');
}

stats.prototype.playerXPs = function(player){
  return this._http.queryAPI('/stats/hw2/xp?players=' + player);
}

module.exports = stats;
